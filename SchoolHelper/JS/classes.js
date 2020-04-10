export class Options {
    constructor(settings) {
        console.log(settings.toString())
        Data.Set('settings', settings.toString()); // makes default value save
    }

    static getItem(x) {
        return JSON.parse(Data.Get('settings'))[x];
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
        Console.log("Received message: " + message.message);
        message = message.toString();
        switch (message) {
            case 'hello':
                Console.log('hello');
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
            Console.log("DEBUG: " + message.message);
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
            console.log(i);
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
            console.log(col);
            console.log(div);
            $("#custom_pages").append(div);
        }
    });
}