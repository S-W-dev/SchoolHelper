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
            handler.handleMessage(message.message);
            break;
        case 'error':
            handler.handleError(message.message);
        case 'debug':
            handler.handleDebug(message.message);
    }
  });



let handler = new Handler();
let debug = true;

class Handler {

  handleMessage(message, callback) {
    console.log("Received message: " + message.message);
    callback();
  }

  handleError(message, callback) {
    console.log("There was an error: " + message.message);
    callback();
  }

  handleDebug(message, callback) {
    if (debug) {
    console.log("DEBUG: " + message.message);
    callback();
    }
  }

}