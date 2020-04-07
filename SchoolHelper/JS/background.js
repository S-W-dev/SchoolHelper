// chrome.storage.sync.set({
//     key: value
// }, function () {
//     console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function (result) {
//     console.log('Value currently is ' + result.key);
// });

  chrome.runtime.onMessage.addListener(function (message, callback) {
    //   if (message.toString() == 'hello') {
    //       sendResponse()
    //   } else if (message.toString() == 'disconnect') {
    //       chrome.runtime.Port.disconnect();
    //   } else 
    switch (message.type) {
        case 'message':
            // console.log("Received message: " + message.message);
            handler.handleMessage(message.message);
            break;
        case 'error':
            // console.log("There was an error: " + message.message);
            handler.handleError(message.message);
        case 'debug':
            handler.handleDebug(message.message);
    }
  });


let handler = new Handler();