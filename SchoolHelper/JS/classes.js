export class Options {
    constructor(settings) {
        console.log(settings.toString())
        Data.Set('settings', settings.toString()); // makes default value save
        this.settings = settings // || get local storage data
        this.debug = this.settings.debug;
        this.theme = this.settings.theme;
    }

    static isDebugEnabled() {
        return this.debug;
    }

    static getTheme() {
        return this.theme;
    }

}

export class Message {
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

export class Handler {

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

export class Data {
    static Set(key, val) {
        localStorage[key] = val;
    }

    static Get(key, def) {
        def = def || undefined; // ensures empty value returns undefined
        return localStorage[key] || def // returns default key if localstorage item doesn't exist
    }

    static Exists(key) {
        return (localStorage.getItem(key) === null);
    }

    static Remove(key) {
        localStorage.removeItem(key)
    }


}