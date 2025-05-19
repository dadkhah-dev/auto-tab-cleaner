function saveOptions() {
  const minutes = parseInt(document.getElementById('idleTime').value);
  const whitelist = document.getElementById('whitelist').value
    .split('\n')
    .map(url => url.trim())
    .filter(url => url);

  chrome.storage.sync.set({
    maxIdleMinutes: isNaN(minutes) ? 30 : minutes,
    whitelist: whitelist
  }, () => {
    alert("Settings saved!");
  });
}
 

document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', saveOptions);

  // بارگذاری تنظیمات
  chrome.storage.sync.get({ maxIdleMinutes: 30, whitelist: [] }, (data) => {
    document.getElementById('idleTime').value = data.maxIdleMinutes;
    document.getElementById('whitelist').value = data.whitelist.join('\n');
  });
});
