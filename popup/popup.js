const defaults={enabled:true,hideChat:false,hideTwitch:false,focusMode:false,lowTimeWarning:true,showOpponentScore:true,showSessionPanel:true};
const get=keys=>new Promise(resolve=>chrome.storage.local.get(keys,resolve));
const set=value=>new Promise(resolve=>chrome.storage.local.set(value,resolve));
async function load(){const data=await get(['settings']);const s={...defaults,...(data.settings||{})};Object.keys(defaults).forEach(id=>document.getElementById(id).checked=!!s[id])}
async function save(){const settings={};Object.keys(defaults).forEach(id=>settings[id]=document.getElementById(id).checked);await set({settings});document.getElementById('status').textContent='Saved.';setTimeout(()=>document.getElementById('status').textContent='Saved automatically.',900)}
document.getElementById('options').onclick=()=>chrome.runtime.openOptionsPage();
Object.keys(defaults).forEach(id=>document.getElementById(id).addEventListener('change',save));
load();