import {
  Options,
  Message,
  Data
} from './classes.js';

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("Got an alarm!", alarm);
  chrome.notifications.create(notificationId, NotificationOptions);
});
