export class Options {
    constructor(settings) {
        console.log(settings.toString());
        Data.Set('settings', settings.toString()); // makes default value save
    }

    static getItem(x) {
        return JSON.parse(Data.Get('settings'), ["no item was found"])[x];
    }

}

export class Reminder {
    constructor (name, link, time) {
        return {name:name, link:link, time:time}
    }
}

export class Reminders {
    constructor(reminders) {
        console.log(reminders.toString())
        Data.Set('reminders', reminders.toString()); // makes default value save
    }

    static getReminders() {
        return JSON.parse(Data.Get('reminders'));
    }

    static get(x) {
        return JSON.parse(Data.Get('reminders'))[x];
    }

    static set(reminder) {
        var reminders = JSON.parse(Data.Get('reminders'));
        reminders.push(JSON.parse(JSON.stringify(reminder).replace(" ", "_")));
        Console.log(reminders);
        // Console.log(JSON.parse(reminders));
        // Console.log(reminders.toString());
        Console.log(reminders);
        reminders = JSON.stringify(reminders);
        Data.Set("reminders", reminders)
    }

    static createReminder() {
        
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

export class Data {
    static Set(key, val) {
        console.log(key);
        console.log(val);
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
// theme loader
export function Load() {
    var theme = Options.getItem('theme');
    $(".navbar").addClass(`navbar-${theme} bg-${theme}`)
    $("body").addClass(`bg-secondary-${theme}`)
}

export var Console = {
    log: function (x) {
        if (Options.getItem('debug') == 'true') {
            console.log(x);
        }
    }
};

export function LoadNav() {
    $('header').load("../HTML/navbar.html", function() {
Console.log("Header loaded");
Load();
$.getJSON("../JSON/grade_rules.json", (grade_rules) => {

    Console.log(grade_rules);
    var grade = Options.getItem('grade');
    if (grade == 'k') {
        grade = '0';
    } else if (grade == 'teacher') grade = '13';
    grade = parseInt(grade);
    var current_grade_rules = grade_rules.grade[grade];

    // add in all allowed pages
    for (var i = 0; i < current_grade_rules.allowed_pages.length; i += 3) {
        var div = $(`<div class="row"></div>`);
        try {
            var col = $(`<div class="col-4"></div>`);

            col.append(`<li class="nav-item"><a href="/HTML/${current_grade_rules.allowed_pages[i]}.html" class="nav-link">${current_grade_rules.allowed_pages[i].replace("_", " ")}</a></li>`)
            div.append(col);
        } catch {
            var col = $(`<div class="col-4"></div>`);

            col.append(`<li class="nav-item"><a href="#" class="nav-link"></a></li>`)
            div.append(col);
        }
        try {
            var col = $(`<div class="col-4"></div>`);

            col.append(`<li class="nav-item"><a href="/HTML/${current_grade_rules.allowed_pages[i+1]}.html" class="nav-link">${current_grade_rules.allowed_pages[i+1].replace("_", " ")}</a></li>`)
            div.append(col);
        } catch {
            var col = $(`<div class="col-4"></div>`);

            col.append(`<li class="nav-item"><a href="#" class="nav-link"></a></li>`)
            div.append(col);
        }

        try {
            var col = $(`<div class="col-4"></div>`);

            col.append(`<li class="nav-item"><a href="/HTML/${current_grade_rules.allowed_pages[i+2]}.html" class="nav-link">${current_grade_rules.allowed_pages[i+2].replace("_", " ")}</a></li>`)
            div.append(col);
            $("#custom_pages").append(``);
        } catch {
            var col = $(`<div class="col-4"></div>`);

            col.append(`<li class="nav-item"><a href="#" class="nav-link"></a></li>`)
            div.append(col);
        }
        $("#custom_pages").append(div);
    }
});
    });
}

export class Expression {
    static save(row, val) {
        Data.Set("expressions", Data.Get("expressions", "{}"));
        var expressions = Data.Get("expressions");
        experssions = JSON.parse(expressions);
        expressions["exprs_"+row][Options.getItem("mode")] = val;
        Data.Set("expressions", JSON.stringify(expressions));
    }

    static get(row) {
        return JSON.parse(Data.Get("expressions"))["exprs_" + row][Options.getItem("mode")];
    }
}

export class Color {
    static save(row, val) {
        Data.Set("expressions", Data.Get("expressions", "{}"));
        var expressions = Data.Get("expressions");
        experssions = JSON.parse(expressions);
        expressions["exprs_" + row]["color"] = val;
        Data.Set("expressions", JSON.stringify(expressions));
    }

    static get(row) {
        return JSON.parse(Data.Get("expressions"))["exprs_" + row]["color"];
    }
}