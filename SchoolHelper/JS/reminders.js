import {
    LoadNav,
    Reminder,
    Reminders,
    Console
} from "./classes.js";

LoadNav();


var total = $("<div></div>");
var arr = [];
for (var i = 0; i < Reminders.getReminders().length; i++) {

    var section = $("<section></section>");
    var h2 = $("<h3 class='col' id='name'></h3>");
    var input1 = $(`<input class='col' placeholder="Google meet name"></input>`);
    var input2 = $(`<input class='col' placeholder="Google meet link"></input>`);
    var input3 = $(`<input class='col' placeholder="Google meet time"></input>`);
    var br = $("<br>");
    section.append(h2);
    section.append(input1);
    section.append(input2);
    section.append(input3);
    section.append(br);
// $("main").append(section);

    var current = Reminders.get(i);
    current = JSON.parse(JSON.stringify(current).toString().replace("_", " "));
    var current_section = section;

    Console.log(current_section);
    Console.log(i);

    current_section.children()[1].value = current["name"];
    current_section.children()[2].value = current["link"];
    current_section.children()[3].value = current["datetime"];

    current_section.children()[0].innerHTML = current_section.children()[1].value;

    current_section.attr('id', i);

    Console.log(current_section);

    arr.push(current_section);

}

arr = arr.reverse();

var ammount = 5;

for (var f = 0; f < ammount; f++) {
    total.append(arr[f]);
}

$("main").append(total);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(".create").on('click', () => {
    document.getElementById('id01').style.display = 'block'
});

$(".cancelbtn").on('click', () => {
    document.getElementById('id01').style.display = 'none'
});

$(".submit").on('click', ()=>{
    // $("input[type=text]")
    Reminders.set(new Reminder($("input[type=text]")[0].value, $("input[type=text]")[1].value, $("input[type=date]")[0].value, $("input[type=time]")[0].value));
    location.reload();
});
