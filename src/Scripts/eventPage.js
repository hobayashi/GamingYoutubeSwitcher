chrome.contextMenus.create({
    id: "1",
    title: "Open by YouTube Gaming",
    contexts: ["all"],
    type: "normal",
    documentUrlPatterns: ["https://www.youtube.com/*"]
});

chrome.contextMenus.create({
    id: "2",
    title: "Open by YouTube",
    contexts: ["all"],
    type: "normal",
    documentUrlPatterns: ["https://gaming.youtube.com/*"]
});

chrome.contextMenus.onClicked.addListener(info => {
    const current = info.pageUrl;
    // www.youtube.com => gaming.youtube.com
    if (info.menuItemId == 1) {
        chrome.tabs.update({url: current.replace(/www(.youtube.com)/, "gaming$1")});    
        return;
    }
    // gaming.youtube.com => www.youtube.com
    chrome.tabs.update({url: current.replace(/gaming(.youtube.com)/, "www$1")});
});