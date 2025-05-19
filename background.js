const DEFAULT_INACTIVE_MINUTES = 30;

function notifyAndClose(tab) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: chrome.runtime.getURL("icons/icon128.png"),
    title: "Auto Tab Cleaner",
    message: `Tab "${tab.title}" will be closed.`,
    priority: 1
  });

  chrome.tabs.remove(tab.id);
}

function checkTabsAndCloseOld() {
  chrome.storage.sync.get({ maxIdleMinutes: DEFAULT_INACTIVE_MINUTES, whitelist: [] }, (data) => {
    const threshold = Date.now() - data.maxIdleMinutes * 60 * 1000;
    let closedCount = 0;

    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        const isWhitelisted = data.whitelist.some(url => tab.url.includes(url));
        if (!tab.active && tab.lastAccessed && tab.lastAccessed < threshold && !isWhitelisted) {
          notifyAndClose(tab);
          closedCount++;
        }
      });

      if (closedCount > 0) {
        chrome.storage.local.get({ totalClosed: 0 }, (res) => {
          const total = res.totalClosed + closedCount;
          chrome.storage.local.set({ totalClosed: total });
          chrome.action.setBadgeText({ text: total.toString() });
        });
      }
    });
  });
}

// Alarm-based scheduling
chrome.runtime.onInstalled.addListener(() => {
  // Create an alarm that runs every 5 minutes
  chrome.alarms.create("autoCleanTabs", {
    periodInMinutes: 1
  });

  checkTabsAndCloseOld(); // Optional: run once on install
});

// Listener for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "autoCleanTabs") {
    checkTabsAndCloseOld();
  }
});
