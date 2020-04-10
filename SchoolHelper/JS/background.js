import {
  Options,
  Message,
  Handler,
  Data
} from './classes.js';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      new Handler(request);
});