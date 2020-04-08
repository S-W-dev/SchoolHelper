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
    console.log("theme button clicked");
    saveTheme('theme');
});

