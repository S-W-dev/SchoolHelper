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