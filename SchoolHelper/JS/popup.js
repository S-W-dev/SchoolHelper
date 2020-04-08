import {Options, Message, Handler, Data} from "./classes.js"

// chrome.runtime.sendMessage(new Message("hello"), function (response) {});

class Popup {
    constructor() {
        // initialize stuff
        new Options(Data.Get('settings', '{"debug": "false", "theme": "light"}'))

        this.Main();
    }

    Main() {
        // main function (remember I said objet oriented oof)
    }

}

new Popup();