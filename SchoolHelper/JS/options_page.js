import {Data, Options} from "./classes.js";

$(document).ready(function () {
    Load();
});

let Load = () => {

    var select = document.getElementById("theme_select");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == Options.getTheme()) {
            child.selected = "true";
            break;
        }
    }

    var select = document.getElementById("debug_select");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == Options.isDebugEnabled().toString()) {
            child.selected = "true";
            break;
        }
    }

    var theme = Options.getTheme();

    if (theme == "dark") {
        $(".navbar").addClass(`navbar-dark bg-dark`)
        $("body").addClass(`bg-secondary-dark`)
    } else {
        $(".navbar").addClass(`navbar-light bg-light`)
        $("body").addClass(`bg-secondary-light`)
    }

}

let saveTheme = (id) => {
    var settings = JSON.parse(Data.Get('settings'));
    console.log(settings);
    var select = document.getElementById(id+"_select");
    settings[id] = select.children[select.selectedIndex].value;
    Data.Set('settings', JSON.stringify(settings));
    console.log(settings);
}


$('#theme').click(()=>{
    saveTheme('theme');
});

$('#debug').click(() => {
    saveTheme('debug');
});


