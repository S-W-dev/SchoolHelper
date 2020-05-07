/*
BASIC AUTHENTICATION DETAILS:
*/
var socket;
socket = io.connect('http://concretegames.net:12121/');

// SETUP THE PREVIOUS messages

var url = "http://concretegames.net:12121/elog.txt",
    averageLineLength = 100,
    numLinesToFetch   = 20,
    marginForError    = 0.2,
    bytesToFetch      = averageLineLength * numLinesToFetch * (1 + marginForError)
;

var allText;

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                allText = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
}
function toggle(item, elem, t) {
  if (t == '0') {
    t = true;
  } else if (t == '1'){
    t = false;
  }
if (item != null) {
  if (item == 1) {
    // past messages
    if (t) {
      showw(elem);
      t = !t;
      if (t) {
        elem.setAttribute('t', '0');
      } else {
        elem.setAttribute('t', '1');
      }
    } else {
      hidde(elem);
      t = !t;
      if (t) {
        elem.setAttribute('t', '0');
      } else {
        elem.setAttribute('t', '1');
      }
    }
  } else if (item == 2) {
    // new messages
    console.log('new message');
    if (t) {
      show(elem);
      t = !t;
      if (t) {
        elem.setAttribute('t', '0');
      } else {
        elem.setAttribute('t', '1');
      }
    } else {
      hide(elem);
      t = !t;
      if (t) {
        elem.setAttribute('t', '0');
      } else {
        elem.setAttribute('t', '1');
      }
    }
  } else {
    console.log(item, elem);
  }
}
}

for (var i = 10; i > 0; i--) {
readTextFile("elog.txt");
$('#history').append($("<br><p t='0' style='box-sizing: border-box;px;display:inline-block;word-wrap:break-word;' class='message' el='1' value='0' />&nbsp;").text(allText.reverse()[i]));
 $(".message").on("click", () => {
toggle(1, $(this), $(this).attr("t"))
 });
 }

function clickHandler() {
  console.log("click handler1")
//onclick='toggle(1, this, this.getAttribute(\"t\"))'
toggle(1, this, this.getAttribute("t"))
}

function clickHandler2() {
  console.log("click handler2")
// onclick='toggle(2, this, this.getAttribute(\"t\"))'
  toggle(2, this, this.attr("t"))
}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

document.getElementById('key').value = getUrlParam('key', '');
document.getElementById('msg_text').value = getUrlParam('msg', '');
document.getElementById('name').value = getUrlParam('name', '');
var hidestr = getUrlParam('hide', 'true');
if (hidestr == "true") {
  document.getElementById('hide').checked = true;
} else {
  document.getElementById('hide').checked = false;
}

if (getUrlParam('el', '1') == '1') {
  document.getElementById('single').checked = true;
} else if (getUrlParam('el', '2') == '2') {
  document.getElementById('double').checked = true;
} else if (getUrlParam('el', '3') == '3') {
  document.getElementById('triple').checked = true;
}


var double = document.getElementById('double'), triple = document.getElementById('triple');
function encrypt(e) {
if (double.checked == true) {

  // double encryption
  var s = en(en(e));
} else if (triple.checked == true) {

  // triple encryption
  var s = en(en(en(e)));
} else {

  // single encryption
  var s = en(e);
}
return s;
}

function decrypt(e) {
  console.log(e);
  if (double.checked == true) {

    // double decryption
    var s = de(de(e));
  } else if (triple.checked == true) {

    // triple decryption
    var s = de(de(de(e)));
  } else {

    // single decryption
    var s = de(e);
  }
  return s;
}
var hidee;


 function show(element) {
if (hidee) {
     var n = 6;
     element.innerHTML = element.innerHTML.substring(0, n)+" "+decrypt(element.innerHTML.substring(n+1));
}

}
function showw(element) {
if (hidee) {
    var n = 5;
    element.innerHTML = element.innerHTML.substring(0, n)+" "+decrypt(element.innerHTML.substring(n+1));
}

}

 function hide(element) {
if (hidee) {
     var n = 6;
     element.innerHTML = element.innerHTML.substring(0, n)+" "+encrypt(element.innerHTML.substring(n+1));
 }
}
function hidde(element) {
if (hidee) {
    var n = 5;
    element.innerHTML = element.innerHTML.substring(0, n)+" "+encrypt(element.innerHTML.substring(n+1));
}
}


 var en, de;
  var audio = new Audio('media/message.mp3');
  $("form#chat").submit(function(e) {
    e.preventDefault();
    socket.emit("send name", document.getElementById('name').value, function() {
    });
    socket.emit("send message", encrypt($(this).find("#msg_text").val()), function() {
      var elem = document.getElementById('history');
        elem.scrollTop = elem.scrollHeight;
      $("form#chat #msg_text").val("");
    });
    socket.emit("send raw_message", $(this).find("#msg_text").val(), function() {
    });
  });

 	var objDiv = document.getElementById("history");
var prevhide;

var name, text;

function setf(e) {
  text = e;
}

function setn(e) {
  name = e;
}

function append(name, text) {
  var elem = document.getElementById('history');
    elem.scrollTop = elem.scrollHeight;
    $('#history').append("<br><div t='0' style='box-sizing: border-box;width:100%;px;display:inline-block;'>"+'<p style="background-color:'+getUrlParam('namecolor', 'skyblue')+';color:'+getUrlParam('color', 'black')+';display:inline;'+getUrlParam('css', '')+'">'+name+'</p>'+"<p t=\"0\" style='width:100%;border-radius:7px;display:inline;word-wrap:break-word;' class='message2' el='3' value='0'>"+text+"</p>&nbsp;</div><br>");
elem.scrollTop = elem.scrollHeight;
 $(".message2").on("click", () => {
toggle(2, $(this), $(this).attr("t"))
 });
}

socket.on("update name", function(name) {
  setn(name);
});

 socket.on("update messages", function(msg){
  var elem = document.getElementById('history');
    elem.scrollTop = elem.scrollHeight;
     audio.play();
     append(name, text);
 });