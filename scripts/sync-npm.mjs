import { readFile, writeFile } from 'node:fs/promises';
const catalog = JSON.parse(await readFile('plugins.json', 'utf8'));
for (const entry of catalog.plugins) {
  const response = await fetch(`https://registry.npmjs.org/${encodeURIComponent(entry.name)}`);
  if (!response.ok) throw new Error(`${entry.name}: npm returned ${response.status}`);
  const metadata = await response.json();
  const latest = metadata['dist-tags']?.latest;
  if (!latest) throw new Error(`${entry.name}: no latest dist-tag`);
  entry.version = latest;
  entry.description = metadata.description ?? entry.description;
  const repository = metadata.repository?.url;
  if (repository) entry.repository = repository.replace(/^git\+/, '').replace(/\.git$/, '');
}
catalog.plugins.sort((a, b) => a.name.localeCompare(b.name));
await writeFile('plugins.json', JSON.stringify(catalog, null, 2) + '\n');
console.log(`synchronized ${catalog.plugins.length} npm versions`);
