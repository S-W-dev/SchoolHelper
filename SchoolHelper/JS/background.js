import {
  Options,
  Message,
  Data,
  Reminders,
  Console
} from './classes.js';
  var reminder;

  var socket;
  socket = io.connect('http://concretegames.net:12121/');

chrome.alarms.onAlarm.addListener(function (alarm) {
  Console.log("Got an alarm!", alarm);
  reminder = Reminders.get(alarm.name);
  chrome.notifications.create({
    type: "list",
    title: "[SchoolHelper] Reminder finished",
    message: reminder.name + " finished: " + reminder.link,
    iconUrl: "/SHLogo.png",
    items: [{
        title: "Name",
        message: reminder.name
      },
      {
        title: "Link",
        message: reminder.link
      }
    ]
  }, () => {
    Console.log("opening window");
    window.open("/HTML/reminders.html", "extension_popup", "width=600,height=500,status=no,scrollbars=no,resizable=no")
  });
});

chrome.notifications.onClicked.addListener(function (notificationId, byUser) {
  Console.log("user clicked notification")
  if (reminder.link != "no") {
    chrome.tabs.create({
      url: reminder.link
    });
  } else {
    window.open(reminder.page, "extension_popup", "width=600,height=500,status=no,scrollbars=no,resizable=no")
  }
});

var audio = new Audio('/HTML/chat/media/message.mp3');

setInterval(()=>{socket.emit("room", Data.Get("secret", ""))}, 100);

socket.on("new message", (data) => {
  Console.log(data);
  var prevData = Data.Get('messages', '[]');
  prevData = JSON.parse(prevData);
  prevData.push(data);
  Data.Set('messages', JSON.stringify(prevData));
  reminder = {link:"no", page: "/HTML/chat/index.html"};
  if (chrome.extension.getViews({ type: "popup" }).length == 0) {
    Console.log("not open");
    chrome.notifications.create({
      type: "list",
      title: "[SchoolHelper] new chat message",
      message:"juan",
      iconUrl: "/SHLogo.png",
      items: [{
          title: JSON.parse(data).name,
          message: JSON.parse(data).message
        }
      ]
    }, () => {
    });
  } else {
    Console.log(chrome.extension.getViews({ type: "popup" }));
  }
  audio.play();
// }
});

/*

*/



// stuff

Data.Set("open", '{"open":"true"}')
var thisVer = chrome.runtime.getManifest().version;
chrome.runtime.onUpdateAvailable.addListener(
  function(details) {
    if (details.version != thisVer) {
      chrome.notifications.create({
  type: "list",
  title: "[SchoolHelper] An update is ready",
  message:"juan",
  iconUrl: "/SHLogo.png",
  items: [{
      title: "Instructions",
      message: "Update SchoolHelper in Settings > Extension"
    }
  ]
}, () => {
});
    }
  }
);
