function updateStats() {
    chrome.storage.local.get({ totalClosed: 0 }, (data) => {
      document.getElementById('closedCount').textContent = data.totalClosed;
    });
  }
  
  function resetStats() {
    chrome.storage.local.set({ totalClosed: 0 }, () => {
      updateStats();
      chrome.action.setBadgeText({ text: '' });
    });
  }
  
  document.addEventListener('DOMContentLoaded', updateStats);
  

  document.addEventListener('DOMContentLoaded', () => {
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', resetStats);
   
  });