const currentUrl = window.location.href;
console.log('current url: ', currentUrl);

const script = 'window.demoExtensionInstalled=true;';

// 向当前网页插入脚本，网页可访问全局变量判断extension是否安装
injectScript(script);

/**
 * Injects a script tag into the current document
 *
 * @param {string} content - Code to be executed in the current document
 */
function injectScript(content) {
  try {
    const container = document.head || document.documentElement;
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('async', 'false');
    scriptTag.textContent = content;
    container.insertBefore(scriptTag, container.children[0]);
    container.removeChild(scriptTag);
  } catch (e) {
    console.error('provider injection failed.', e);
  }
}
