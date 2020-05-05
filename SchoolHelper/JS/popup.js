import {
    Options,
    Message,
    Data,
    Console,
    LoadNav,
    Reminders
} from "./classes.js"

// chrome.runtime.sendMessage(new Message("hello"), function (response) {});

class Popup {
    constructor() {
        // initialize stuff
        new Options(Data.Get('settings', '{"debug": "true", "theme": "dark", "grade":"8", "mode":"function", "numOfInputs":"10", "currentPage":"/popup.html"}'));
        new Reminders(Data.Get('reminders', '[]'));


        if (Options.getItem('currentPage') != window.location.pathname) {
            window.location.href = window.location.protocol + "//" + window.location.host + Options.getItem("currentPage");
        }

        LoadNav();

        var theme = Options.getItem('theme');

        if (theme == "dark") {
            $(".navbar").addClass(`navbar-dark bg-dark`)
            $("body").addClass(`bg-secondary-dark`)
        } else {
            $(".navbar").addClass(`navbar-light bg-light`)
            $("body").addClass(`bg-secondary-light`)
        }

        var grade_rules = Data.Get("grade_rules", `{"grade":[{"allowed_pages":[],"allowed_links":[]},{"allowed_pages":[],"allowed_links":[]},{"allowed_pages":[],"allowed_links":[]},{"allowed_pages":[],"allowed_links":[]},{"allowed_pages":[],"allowed_links":[]},{"allowed_pages":[],"allowed_links":[]},{"allowed_pages":["mini_calculator"],"allowed_links":[]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[]},{"allowed_pages":["mini_calculator","calculator","graphing_calculator","teacher"],"allowed_links":[]}]}`);

            grade_rules = JSON.parse(grade_rules);

            Console.log(grade_rules);
            var grade = Options.getItem('grade');
            if (grade == 'k') {
                grade = '0';
            } else if (grade == 'teacher') grade = '13';
            grade = parseInt(grade);
            var current_grade_rules = grade_rules.grade[grade];
            // add in allowed links
            for (var i = 0; i < current_grade_rules.allowed_links.length; i++) {
                $("#content").append(`<br><a target="_blank" href="${current_grade_rules.allowed_links[i]["link"]}">${current_grade_rules.allowed_links[i]["name"]}</a><button class="" style="float: right; height: 30px"; vertical-align: middle;>X</button>`);
            }

            Console.log(current_grade_rules);



        this.Main();
    }

    Main() {


        //easter eggs

        var buffer = [];
        var allowed = ["a", "b", "arrowup", "arrowdown", "arrowleft", "arrowright", "enter"];

        var rainbow = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a", "enter"];

        document.addEventListener('keydown', event => {

            const key = event.key.toLowerCase();

            if (!allowed.includes(key)) {
                buffer = [];
                return;
            }

            buffer.push(key);

            // rainbow theme
            if (buffer.toString() == rainbow.toString()) {
                Options.setItem("theme", "rainbow");
                location.reload();
            }

        });


    }

}

new Popup();
