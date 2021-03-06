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
        new Options(Data.Get('settings', `{"debug": "false", "theme": "dark", "grade":"8", "mode":"function", "numOfInputs":"10", "currentPage":"/popup.html", "notifications":"enabled"}`));
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

        var grade_rules = Data.Get("grade_rules", `{"grade":[{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["mini_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["mini_calculator","calculator","graphing_calculator","teacher"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]}]}`);

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
                $("#content").append(`<div class="customLinkDiv"><a target="_blank" class="CustomLink TextColor" href="${current_grade_rules.allowed_links[i]["link"]}">${current_grade_rules.allowed_links[i]["name"]}</a><span index="${i}" class="del DeleteButton">x</span></div>`);
            }

            Console.log(current_grade_rules);

            Data.Set("grade_rules", JSON.stringify(grade_rules));

        this.Main();
    }

    Main() {

        var dark = true;

      $('.trashicon').on('click',function(){
          if (dark) {
              $("#trash").addClass("btn-outline-danger");
              $("#trash").removeClass("btn-danger");
              $("#trash").attr('src', "/trash2.png");
          } else {
              $("#trash").removeClass("btn-outline-danger");
              $("#trash").addClass("btn-danger");
              $("#trash").attr('src', "/trash.png");
          }
          dark=!dark;
        $(".DeleteButton").toggle();
      });

        //easter eggs

        var buffer = [];
        var allowed = ["a", "b", "arrowup", "arrowdown", "arrowleft", "arrowright", "enter", "c", "g", "shift", "c", "h", "t"];

        var rainbow = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a", "enter"];

        var cg = ["c", "g", "shift", "enter"];

        var chat = ["c", "h", "a", "t"];

        document.addEventListener('keydown', event => {

            const key = event.key.toLowerCase();

            if (!allowed.includes(key)) {
                buffer = [];
                return;
            }

            buffer.push(key);

            // rainbow theme
            if (buffer.toString() == rainbow.toString()) {
                buffer = [];
                Options.setItem("theme", "rainbow");
                location.reload();
            }

            // concrete games
            if (buffer.toString() == cg.toString()) {
                buffer = [];
                $("body").append("<iframe width='500px' height='500px' src='https://concretegames.net/'></iframe>");
            }

            // chat
            if (buffer.toString() == chat.toString()) {
                buffer = [];
                location.href = "/HTML/chat/index.html";
            }

        });


    }

}

new Popup();


$(document).ready(function () {
  $(".del").on("click", function () {
      Console.log($(this))
      var grade_rules = Data.Get("grade_rules");
      grade_rules = JSON.parse(grade_rules);
      for (var i = 0; i < grade_rules["grade"].length; i++) {
          grade_rules["grade"][i]["allowed_links"].splice($(this).attr('index'), 1);
      }
      Data.Set("grade_rules", JSON.stringify(grade_rules))
      location.reload();
  });
});
