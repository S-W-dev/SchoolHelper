/*
BASIC AUTHENTICATION DETAILS:
*/
var socket;
socket = io.connect('https://concretegames.net:12121/');

// SETUP THE PREVIOUS messages

var url = "elog.txt",
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
$('#history').append($("<br><p t='0' style='box-sizing: border-box;px;display:inline-block;word-wrap:break-word;' class='message' el='1' onclick='toggle(1, this, this.getAttribute(\"t\"))' value='0' />&nbsp;").text(allText.reverse()[i]));
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
    $('#history').append("<br><div t='0' style='box-sizing: border-box;width:100%;px;display:inline-block;'>"+'<p style="background-color:'+getUrlParam('namecolor', 'skyblue')+';color:'+getUrlParam('color', 'black')+';display:inline;'+getUrlParam('css', '')+'">'+name+'</p>'+"<p t=\"0\" onclick='toggle(2, this, this.getAttribute(\"t\"))' style='width:100%;border-radius:7px;display:inline;word-wrap:break-word;' class='message' el='3' value='0'>"+text+"</p>&nbsp;</div><br>");
elem.scrollTop = elem.scrollHeight;
}

socket.on("update name", function(name) {
  setn(name);
});

 socket.on("update messages", function(msg){
   var elem = document.getElementById('history');
     elem.scrollTop = elem.scrollHeight;
   var elem = document.getElementById('history');
     elem.scrollTop = elem.scrollHeight;
   if (hidee == true) {
     if (triple.checked==true){
       var final_message = $("<p el='3' onmouseout='hide(this)' onmouseover='show(this)' value='0' />&nbsp;").text("#"+msg.substring(0,8)+msg.substring(8));
     } else if (double.checked==true){
       var final_message = $("<p el='2' onmouseout='hide(this)' onmouseover='show(this)' value='0' />&nbsp;").text("#"+msg.substring(0,8)+msg.substring(8));
     } else {
       var final_message = $("<p el='1' onmouseout='hide(this)' onmouseover='show(this)' value='0' />&nbsp;").text("#"+msg.substring(0,8)+msg.substring(8));
     }
   } else if (hidee == false){
     if (triple.checked==true){
       var final_message = $("<p el='3' onmouseout='hide(this)' onmouseover='show(this)' value='0' />&nbsp;").text("#"+msg.substring(0,6)+decrypt(msg.substring(6)));
     } else if (double.checked==true) {
       var final_message = $("<p el='3' onmouseout='hide(this)' onmouseover='show(this)' value='0' />&nbsp;").text("#"+msg.substring(0,6)+decrypt(msg.substring(6)));
     } else {
       var final_message = $("<p el='3' onmouseout='hide(this)' onmouseover='show(this)' value='0' />&nbsp;").text("#"+msg.substring(0,6)+decrypt(msg.substring(6)));
     }
   }
   if (hidee == false) {
    setf("#"+msg.substring(0,6)+decrypt(msg.substring(6)));
  } else if (hidee == true) {
    setf("#"+msg.substring(0,6)+msg.substring(6));
  }
  var elem = document.getElementById('history');
    elem.scrollTop = elem.scrollHeight;
    var elem = document.getElementById('history');
      elem.scrollTop = elem.scrollHeight;
      var elem = document.getElementById('history');
        elem.scrollTop = elem.scrollHeight;
     audio.play();
     append(name, text);
 });



 socket.on("admin", function(msg){
 if (hidee == true) {var final_message = $("<p value='0' style='background-color:maroon;color:black;font-size:25px;'/>&nbsp;").text("SERVER#"+msg.substring(0,30)+msg.substring(6));}else if (hidee == false){
   var final_message = $("<p value='0' style='background-color:maroon;color:black;font-size:25px;'/>&nbsp;").text("SERVER#"+msg.substring(0,30)+msg.substring(6));
 }
    $("#history").append(final_message);
   objDiv.scrollTop = objDiv.scrollHeight;
   audio.play();
 });

 var volume;
 var checkBox = document.getElementById("mute");
 // document.getElementById('hide').checked = true;
 var elem = document.getElementById('history');
   elem.scrollTop = elem.scrollHeight;
 setInterval(function() {
   if (prevhide != null) {
        hidee = prevhide;
   }
   en = c(document.getElementById('key').value);
   de = d(document.getElementById('key').value);
   var t = d('');
   if (hidee) {
     document.getElementById('displayText').innerHTML = encrypt("Hi");
   } else {
     document.getElementById('displayText').innerHTML = t(encrypt("Hi"));
   }
   volume = document.getElementById("volume").value/100;
   audio.volume = volume;
   var text = document.getElementById("text");
   if (checkBox.checked == true){
     audio.volume = 0;
     text.innerHTML = "Mute Enabled";
   } else {
      text.innerHTML = "Mute Disabled";
   }

 if (document.getElementById('hide').checked == true) {
   document.getElementById('hidetext').innerHTML = "Hide Enabled";
   hidee = true;
} else {
  document.getElementById('hidetext').innerHTML = "Hide Disabled";
  hidee = false;
}
document.getElementById('msg_text').value = document.getElementById('msg_text').value.replace("%20", " ");
 }, 10);

 function check() {
   var ptags = jQuery.makeArray($('#history').children());
   jQuery.each(ptags, function(elem) {
     ptags[elem].remove();
   });
   ptags.empty();
   if (ptags.length > 0) {
   //   alert("You can only change this before messages have been sent.");
   // location.reload();
 }

}

function deleteAll() {

}

 let c = salt => {
     let textToChars = text => text.split('').map(c => c.charCodeAt(0))
     let byteHex = n => ("0" + Number(n).toString(16)).substr(-2)
     let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code)

     return text => text.split('')
         .map(textToChars)
         .map(applySaltToChar)
         .map(byteHex)
         .join('')
 }

 let d = salt => {
     let textToChars = text => text.split('').map(c => c.charCodeAt(0))
     let saltChars = textToChars(salt)
     let applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code)
     return encoded => encoded.match(/.{1,2}/g)
         .map(hex => parseInt(hex, 16))
         .map(applySaltToChar)
         .map(charCode => String.fromCharCode(charCode))
         .join('')
 }
