import {Data} from "/JS/classes.js"

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

$('#chat').submit(function(e) {
      e.preventDefault(); // prevents page reloading
      var data = {
        message: $('#msg_text').val(),
        secret: sha256($('#secret').val()),
        name: $('#username').val()
      };
      socket.emit('message', JSON.stringify(data));
      console.log(data);
      $('#msg_text').val('');
      return false;
});

socket.on("new message", (data) => {
  console.log(data);
data = JSON.parse(data)
// if ($('#secret').val() == data.secret) {
  $("#history").append(`<p class="message"><span class="name">${data.name}<span>: ${data.message}</p>`)
  var elem = document.getElementById('history');
  elem.scrollTop = elem.scrollHeight;
  //audio.play();
// }
});
// socket.emit('message', {your object yay});

$(document).ready(()=>{

  console.log('adding message history');
    var data = JSON.parse(Data.Get("messages", '[]'));
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
      var d = JSON.parse(data[i]);
      $("#history").append(`<p class="message"><span class="name">${d.name}<span>: ${d.message}</p>`)
    }
    var elem = document.getElementById('history');
    elem.scrollTop = elem.scrollHeight;


console.log('ready')
$("#secret").val(Data.Get("usecret", ""));
socket.emit("room", sha256($("#secret").val()));
Data.Set("secret", sha256($("#secret").val()));

$("#secret").on('change', ()=>{
  socket.emit("room", sha256($("#secret").val()));
  Data.Set("secret", sha256($("#secret").val()));
  Data.Set("usecret", $("#secret").val());
});

$("#msg_text").keypress((e)=>{
   if(e.which == 13 && e.shiftKey) {
     document.getElementById('submit-btn').click();
     $("#msg_text").val('');
   }
});

});
