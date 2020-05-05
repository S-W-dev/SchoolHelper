import {
  Options,
  Message,
  Data,
  Reminders
} from './classes.js';
  var reminder;

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("Got an alarm!", alarm);
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
    console.log("opening window");
    window.open("/HTML/reminders.html", "extension_popup", "width=610,height=500,status=no,scrollbars=no,resizable=no")
  });
});

chrome.notifications.onClicked.addListener(function (notificationId, byUser) {
  console.log("user clicked notification")
  chrome.tabs.create({
    url: reminder.link
  });
});