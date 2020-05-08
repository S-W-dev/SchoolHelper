import {Data, Console} from "/JS/classes.js"

/*
BASIC AUTHENTICATION DETAILS:
*/
var socket;
socket = io.connect('http://concretegames.net:12121/');

var audio = new Audio('/HTML/chat/media/message.mp3');

// SETUP THE PREVIOUS messages

// var url = "http://concretegames.net:12121/elog.txt",
//     averageLineLength = 100,
//     numLinesToFetch   = 20,
//     marginForError    = 0.2,
//     bytesToFetch      = averageLineLength * numLinesToFetch * (1 + marginForError);
//
// var allText;
//
// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 allText = rawFile.responseText;
//                 allText = allText.split("\n");
//             }
//         }
//     }
//     rawFile.send(null);
// }

var sessionID;
var hideshow = false;

$('#chat').submit(function(e) {
      e.preventDefault(); // prevents page reloading
      var data = {
        message: $('#msg_text').val(),
        secret: sha256($('#secret').val()),
        name: $('#username').val(),
        sessionID: ''
      };
      socket.emit('message', JSON.stringify(data));
      Console.log(data);
      $('#msg_text').val('');
      return false;
});

socket.on("new message", (data) => {
  Console.log(data);
  data = JSON.parse(data)
  var sessionId;
  if(data.sessionID==null) {
    sessionId='';
  } else {
    sessionId = data.sessionID;
    sessionId = "#" + sessionId.slice(-7);
  }
  $("#history").append(`<div class="messageContainer"><p class="message"><span class="name">${data.name}<span><sup class="sessionID" style="display: none;">` + sessionId + `</sup>: ${data.message}</p></div>`);
  if(hideshow) {
    $('.sessionID').show();
  } else {
    $('.sessionID').hide();
  }
  var elem = document.getElementById('history');
  elem.scrollTop = elem.scrollHeight;
  //audio.play();
// }
});
// socket.emit('message', {your object yay});

$(document).ready(()=>{

  Console.log('adding message history');
    var data = JSON.parse(Data.Get("messages", '[]'));
    for (var i = 0; i < data.length; i++) {
      Console.log(data[i]);
      var d = JSON.parse(data[i]);
      var sessionId;
      if(d.sessionID==null) {
        sessionId='';
      } else {
        sessionId = d.sessionID;
        sessionId = "#" + sessionId.slice(-7);
      }
      $("#history").append(`<div class="messageContainer"><p class="message"><span class="name">${d.name}<span><sup class="sessionID" style="display: none;">` + sessionId + `</sup>: ${d.message}</p></div>`);
    }
    var elem = document.getElementById('history');
    elem.scrollTop = elem.scrollHeight;


Console.log('ready')
$("#secret").val(Data.Get("usecret", ""));
$("#username").val(Data.Get("username", ""));
socket.emit("room", sha256($("#secret").val()));
Data.Set("secret", sha256($("#secret").val()));

$("#secret").on('change', ()=>{
  socket.emit("room", sha256($("#secret").val()));
  Data.Set("secret", sha256($("#secret").val()));
  Data.Set("usecret", $("#secret").val());
});

$("#username").on('change', ()=>{
  Data.Set("username", $('#username').val())
});

$("#msg_text").keypress((e)=>{
   if(e.which == 13 && e.shiftKey) {
     document.getElementById('submit-btn').click();
     //location.reload();
   }
});

$("body").delegate("#history", "click", function(){
  $('.sessionID').toggle();
  hideshow = !hideshow;
});

});

$('#msg_text').keyup( function() {
  $(this).val( $(this).val().replace( /\r?\n/gi, '' ) );
});
