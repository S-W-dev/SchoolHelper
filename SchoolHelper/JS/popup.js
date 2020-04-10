import {
    Options,
    Message,
    Handler,
    Data,
    Console
} from "./classes.js"

// chrome.runtime.sendMessage(new Message("hello"), function (response) {});

class Popup {
    constructor() {
        // initialize stuff
        new Options(Data.Get('settings', '{"debug": "true", "theme": "dark", "grade":"8"}'));

        var theme = Options.getItem('theme');

        if (theme == "dark") {
            $(".navbar").addClass(`navbar-dark bg-dark`)
            $("body").addClass(`bg-secondary-dark`)
        } else {
            $(".navbar").addClass(`navbar-light bg-light`)
            $("body").addClass(`bg-secondary-light`)
        }

        // create main page content based on grade level

        $("#content").load("./HTML/grade_pages/" + Options.getItem('grade') + "_grade.html");
        $.getJSON("../JSON/grade_rules.json", (grade_rules) => {

            Console.log(grade_rules);
            var grade = Options.getItem('grade');
            if (grade == 'k') {
                grade = '0';
            } else if (grade == 'teacher') grade = '13';
            grade = parseInt(grade);
            var current_grade_rules = grade_rules.grade[grade];

            // add in all allowed pages
            for (var i = 0; i < current_grade_rules.allowed_pages.length; i++) {
                $("#content2").append(`<br><a href="HTML/${current_grade_rules.allowed_pages[i]}.html">${current_grade_rules.allowed_pages[i].replace("_", " ")}</a>`);
            }

            Console.log(current_grade_rules);

        });

        this.Main();
    }

    Main() {
        // main function (remember I said object oriented oof)
    }

}

new Popup();