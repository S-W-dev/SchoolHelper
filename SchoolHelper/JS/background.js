// chrome.storage.sync.set({
//     key: value
// }, function () {
//     console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function (result) {
//     console.log('Value currently is ' + result.key);
// });

  chrome.runtime.onMessage.addListener(function (message, callback) {
      if (message == 'hello') {
          sendResponse({
              greeting: 'welcome!'
          })
      } else if (message == 'disconnect') {
          chrome.runtime.Port.disconnect();
      }
  });