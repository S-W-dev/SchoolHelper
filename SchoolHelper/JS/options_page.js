import {
    Data,
    Options,
    Console,
    LoadNav,
    Load
} from "./classes.js";

function handleEvent(x) {
$('#'+items[x]).click(() => {
    save(items[x]);
});
}

var items = ["theme", "grade", "debug"];

let load = () => {

    // initialize select elements
    for (var x = 0; x < items.length; x++) {
        handleEvent(x);
        var select = document.getElementById(items[x] + "_select");
        for (var i = 0; i < select.children.length; i++) {
            var child = select.children[i];
            if (child.value == Options.getItem(items[x]).toString()) {
                child.selected = "true";
                break;
            }
        }
    }
}

let save = (id) => {
    var settings = JSON.parse(Data.Get('settings'));
    Console.log(settings);
    var select = document.getElementById(id + "_select");
    settings[id] = select.children[select.selectedIndex].value;
    Data.Set('settings', JSON.stringify(settings));
    Console.log(settings);
    Load();
}

LoadNav();
load();