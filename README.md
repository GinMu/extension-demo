# extension-demo

The demo is to check chrome extension whether installed and how to send and receive messages from web page

## 检查 extension 是否安装

1. 通过[contentscript](https://github.com/GinMu/extension-demo/blob/master/src/contentscript.js)向当前网页注入脚本, 通过全局变量判断是否安装.

## 网页如何向 extension 发送消息

1. 通过[background](https://github.com/GinMu/extension-demo/blob/master/src/background.js)下`onMessageExternal`事件.

## 参考

1. [Chrome Extension](https://developer.chrome.com/extensions)
2. [Chrome Extension Content Scripts](https://developer.chrome.com/extensions/content_scripts)
3. [Chrome Extension Message Passing](https://developer.chrome.com/extensions/messaging)
4. [Generate Vue Template](https://github.com/Kocal/vue-web-extension)
