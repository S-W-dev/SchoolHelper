import {
    Data,
    Options,
    Console
} from "./classes.js";

$(document).ready(function () {

    // event handlers

    $('#theme').click(() => {
        save('theme');
    });
    $('#grade').click(() => {
        save('grade');
    });
    $('#show').click(() => {
        save('show');
    });
    $('#debug').click(() => {
        save('debug');
    });


});


let Load = () => {

    var items = ["theme", "grade", "debug", "show"];

    for (var x = 0; x < items.length; x++) {
        var select = document.getElementById(items[x] + "_select");
        for (var i = 0; i < select.children.length; i++) {
            var child = select.children[i];
            if (child.value == Options.getItem(items[x]).toString()) {
                child.selected = "true";
                break;
            }
        }
    }

    var theme = Options.getItem('theme');

    if (theme == "dark") {
        $(".navbar").addClass(`navbar-dark bg-dark`)
        $("body").addClass(`bg-secondary-dark`)
    } else {
        $(".navbar").addClass(`navbar-light bg-light`)
        $("body").addClass(`bg-secondary-light`)
    }

}

let save = (id) => {
    var settings = JSON.parse(Data.Get('settings'));
    Console.log(settings);
    var select = document.getElementById(id + "_select");
    settings[id] = select.children[select.selectedIndex].value;
    Data.Set('settings', JSON.stringify(settings));
    Console.log(settings);
}

Load();