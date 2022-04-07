
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
