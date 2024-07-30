chrome.tabs.onCreated.addListener((tab) => {
    console.log(`New tab created: ${tab.url}`)
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    console.log(`Tab closed: ${tabId}`)
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed")
});