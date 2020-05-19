global.browser = require('webextension-polyfill');

// 监听web页面消息
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  console.log(request);
  console.log(sender);
  sendResponse(request);
});

// const extensionId = "abcdefghijklmnoabcdefhijklmnoabc";
// const data;
// // 网页发送消息
// chrome.runtime.sendMessage(extensionId, data, (response) => {
//   console.log(response);
// });
