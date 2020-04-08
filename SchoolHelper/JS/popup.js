import Message from './Message.js';

console.log(Message);

chrome.runtime.sendMessage(new Message("hello"), function (response) {});