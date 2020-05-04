import {
    Options,
    Message,
    Data,
    Console,
    LoadNav,
    Reminders
} from "./classes.js"

var grade = Options.getItem('grade');
if (grade == 'k') {
  grade = '0';
} else if (grade == 'teacher') grade = '13';

switch(parseInt(grade)) {
  case 0:
    $("#Grade").text("Kindergarten");
    break;
  case 1:
    $("#Grade").text("1st Grade");
    break;
  case 2:
    $("#Grade").text("2nd Grade");
    break;
  case 3:
    $("#Grade").text("3rd Grade");
    break;
  case 13:
    $("#Grade").text("Teacher");
    break;
  default:
    $("#Grade").text(grade+"th Grade");
    break;
}
