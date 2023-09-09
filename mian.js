let currentDate = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = currentDate.getDay();
const todayName = daysOfWeek[today];
document.getElementById("dayOfWeek").innerHTML = todayName;
const currentTime = new Date().getTime();
document.getElementById("currentTime").innerHTML = currentTime;

