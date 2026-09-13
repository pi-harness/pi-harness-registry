import { readFile, writeFile } from 'node:fs/promises';
const catalog=JSON.parse(await readFile('plugins.json','utf8'));
await Promise.all(catalog.plugins.map(async entry=>{const r=await fetch(`https://registry.npmjs.org/${encodeURIComponent(entry.name)}`);if(!r.ok)throw Error(`${entry.name}: ${r.status}`);const m=await r.json();entry.version=m['dist-tags']?.latest??entry.version;entry.description=m.description??entry.description;const u=m.repository?.url;if(u)entry.repository=u.replace(/^git\+/,'').replace(/\.git$/,'')}));
catalog.plugins.sort((a,b)=>a.name.localeCompare(b.name)); await writeFile('plugins.json',JSON.stringify(catalog,null,2)+'\n'); console.log(`synchronized ${catalog.plugins.length} plugins`);
