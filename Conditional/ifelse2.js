var sec = 3720;
var hour;
var min;

hour = Math.floor(sec/3600);   // 1
sec = sec % 3600;  // rem
min = Math.floor(sec / 60);
sec = sec % 60;




console.log("Hour = ",hour);
console.log("Min = ",min);
console.log("Sec = ",sec);

var amt = 46789438

var n500 = amt/500;
amt = amt % 500;

var n200