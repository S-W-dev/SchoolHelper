import {Options, Message, Handler, Data} from "./classes.js"

// chrome.runtime.sendMessage(new Message("hello"), function (response) {});

class Popup {
    constructor() {
        // initialize stuff
        new Options(Data.Get('settings', '{"debug": "false", "theme": "light", "grade":"7"}'));

         var theme = Options.getItem('theme');

         if (theme == "dark") {
             $(".navbar").addClass(`navbar-dark bg-dark`)
             $("body").addClass(`bg-secondary-dark`)
         } else {
             $(".navbar").addClass(`navbar-light bg-light`)
             $("body").addClass(`bg-secondary-light`)
         }

         // create main page content based on grade level

         $.get("./HTML/grade_pages/"+Options.getItem('grade')+"_grade.html", function (data) {
             $("#content").html(data);
         });

        this.Main();
    }

    Main() {
        // main function (remember I said objet oriented oof)
    }

}

new Popup();