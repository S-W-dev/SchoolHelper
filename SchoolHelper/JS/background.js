import {
  Options,
  Message,
  Data,
  Reminders
} from './classes.js';

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("Got an alarm!", alarm);
  var reminder = Reminders.get(alarm.name);
    chrome.notifications.create({
      type: "list",
      title: "[SchoolHelper] Alarm finished.",
      message: reminder.name + " finished: " + reminder.link,
      iconUrl: "/SHLogo.png",
      items: [
        {title:"Link", 
        message:reminder.link
      },
      {
        title: "Created",
        message: reminder.create
      },
    {
      title: "Scheduled Time",
      message: reminder.date + " " + reminder.time
    }]
    }, () => {});
});
