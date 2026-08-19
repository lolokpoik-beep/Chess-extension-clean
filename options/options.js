const defaults={warningSeconds:30,criticalSeconds:10};
const get=keys=>new Promise(resolve=>chrome.storage.local.get(keys,resolve));
const set=value=>new Promise(resolve=>chrome.storage.local.set(value,resolve));
async function load(){const data=await get(['settings']);const s={...defaults,...(data.settings||{})};document.getElementById('warningSeconds').value=s.warningSeconds;document.getElementById('criticalSeconds').value=s.criticalSeconds}
async function save(){const data=await get(['settings']);const settings={...(data.settings||{})};settings.warningSeconds=Math.max(5,Number(document.getElementById('warningSeconds').value)||30);settings.criticalSeconds=Math.max(3,Number(document.getElementById('criticalSeconds').value)||10);await set({settings});document.getElementById('status').textContent='Saved.'}
document.querySelectorAll('input').forEach(i=>i.addEventListener('change',save));
document.getElementById('export').onclick=async()=>{const data=await get(['opponents','session','settings']);const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='chesscom-zen-pro-data.json';a.click();URL.revokeObjectURL(url)};
document.getElementById('clear').onclick=async()=>{if(!confirm('Clear Zen Pro local data?'))return;await new Promise(r=>chrome.storage.local.clear(r));await load();document.getElementById('status').textContent='Local data cleared.'};
load();