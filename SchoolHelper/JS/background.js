// chrome.storage.sync.set({
//     key: value
// }, function () {
//     console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function (result) {
//     console.log('Value currently is ' + result.key);
// });

let debug = true;

class Message {
  constructor(message, type) {
    switch (type) {
      case 1:
        this.type = "message";
        break;
      case 2:
        this.type = "error";
        break;
      case 3:
        this.type = "debug";
        break;
      default:
        this.type = "message"; // empty parameter default
    }
    this.message = message || undefined; // ensures an empty message is undefined

    return {
      message: this.message,
      type: this.type
    };
  }

}
class Handler {

  constructor(message, callback) {
    callback = callback || function () {};
    switch (message.type) {
      case 'message':
        handler.handleMessage(message.message, callback);
        break;
      case 'error':
        handler.handleError(message.message, callback);
        break;
      case 'debug':
        handler.handleDebug(message.message, callback);
        break;
    }
  }

  handleMessage(message, callback) {
    console.log("Received message: " + message.message);
    message = message.toString();
    switch (message) {
      case 'hello':
        console.log('hello');
        break;
      case 'disconnect':
        chrome.runtime.Port.disconnect();
        break;
      default:
        new Handler(new Message("No message was supplied.", 2));
    }
    callback();
  }

  handleError(message, callback) {
    console.error("There was an error: " + message.message);
    callback();
  }

  handleDebug(message, callback) {
    if (debug) {
      console.log("DEBUG: " + message.message);
    }
    callback();
  }

}

  chrome.runtime.onMessage.addListener(function (message, callback) {
    new Handler(message);
  });



