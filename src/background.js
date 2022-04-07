
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
