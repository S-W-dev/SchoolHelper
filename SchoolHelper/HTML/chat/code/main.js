/*
BASIC AUTHENTICATION DETAILS:
*/
var socket;
socket = io.connect('http://concretegames.net:12121/');

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
      socket.emit('message', JSON.stringify({
        message: $('#msg_text').val(),
        secret: $('#secret').val(),
        name: $('#username').val()
      }));
      $('#msg_text').val('');
      $('#secret').val('');
      return false;
});

socket.on("new message", (data) => {

if ($('#secret').val() == data.secret) {
  $("#history").append(`<p class="message"><span class="name">${data.name}<span>: ${data.message}</p>`)
}

});
// socket.emit('message', {your object yay});
