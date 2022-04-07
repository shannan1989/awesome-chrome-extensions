
chrome.contextMenus.create({
    title: "Kiwi右键菜单",
    onclick: function () {
        alert('您点击了Kiwi右键菜单！');
        chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: 'assets/image/icon.png',
            title: '温馨提示',
            message: '您点击了Kiwi右键菜单！'
        });
    }
});

chrome.contextMenus.create({
    title: '使用百度搜索：%s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        // 注意不能使用location.href，因为location是属于background的window对象
        chrome.tabs.create({ url: 'https://www.baidu.com/s?ie=UTF-8&wd=' + encodeURI(params.selectionText) });
    }
});

/* 将所有访问 a站 的请求，转到 b站 */
chrome.webRequest.onBeforeRequest.addListener(
    function (detail) {
        return { redirectUrl: detail.url.replace('a.leleketang.com', 'www.leleketang.com') };
    },
    {
        urls: ["*://a.leleketang.com/*"],
        types: ["main_frame"]
    },
    ["blocking"]
);

/* 封禁特定网络请求 方法一 */
chrome.webRequest.onBeforeRequest.addListener(
    function (detail) {
        return { cancel: detail.url.indexOf("://www.evil.com/") != -1 };
    },
    {
        urls: ["<all_urls>"]
    },
    ["blocking"]
);
/* 封禁特定网络请求 方法二 */
chrome.webRequest.onBeforeRequest.addListener(
    function (detail) {
        return { cancel: true };
    },
    {
        urls: ["*://www.evil.com/*"]
    },
    ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
    function (detail) { },
    {
        urls: ["<all_urls>"]
    },
    ["requestBody", "extraHeaders", "blocking"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
    function (detail) {
        for (var i = 0; i < detail.requestHeaders.length; i++) {
            if (detail.requestHeaders[i].name === 'User-Agent') {
                // TODO
            }
        }
        return { requestHeaders: detail.requestHeaders };
    },
    {
        urls: ["<all_urls>"]
    },
    ["requestHeaders", "extraHeaders", "blocking"]
);

chrome.webRequest.onSendHeaders.addListener(
    function (detail) { },
    {
        urls: ["<all_urls>"]
    },
    ["requestHeaders", "extraHeaders"]
);

chrome.webRequest.onHeadersReceived.addListener(
    function (detail) { },
    {
        urls: ["<all_urls>"]
    },
    ["responseHeaders", "extraHeaders", "blocking"]
);

chrome.webRequest.onResponseStarted.addListener(
    function (detail) { },
    {
        urls: ["<all_urls>"]
    },
    ["responseHeaders", "extraHeaders"]
);

chrome.webRequest.onCompleted.addListener(
    function (detail) { },
    {
        urls: ["<all_urls>"]
    },
    ["responseHeaders", "extraHeaders"]
);
