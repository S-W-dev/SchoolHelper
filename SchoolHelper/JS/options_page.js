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

$('#create-link-submit').on('click',function(){
    var grade_rules = Data.Get("grade_rules", `{"grade":[{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":[],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["mini_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["calculator","graphing_calculator"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]},{"allowed_pages":["mini_calculator","calculator","graphing_calculator","teacher"],"allowed_links":[{"name":"PowerSchool","link":"https://psa.washk12.org"},{"name":"Washk12 Canvas","link":"https://washk12.instructure.com"},{"name":"Google Drive","link":"https://drive.google.com"}]}]}`);
      Console.log(grade_rules);
      grade_rules = JSON.parse(grade_rules);
      var link=$("#create-link-link").val()
      if(!link.includes("http://")&&!link.includes("https://")) {
        link = "http://" + link;
      }
      for (var i = 0; i < grade_rules["grade"].length; i++) {
          Console.log({
              "name": $("#create-link-title").val(),
              "link": link
          });
        grade_rules["grade"][i]["allowed_links"].push({
            "name": $("#create-link-title").val(),
            "link": link
        });
      }
      Data.Set("grade_rules", JSON.stringify(grade_rules))
});

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

$("select").on('change', function () {
    location.reload();
});
