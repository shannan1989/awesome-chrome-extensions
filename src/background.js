console.log('Message from Mr Shannan!');

// 监听所有请求的响应头
chrome.webRequest.onResponseStarted.addListener(function (detail) {
    console.log(detail);
}, {
    urls: ["<all_urls>"]
}, ["responseHeaders"]);
