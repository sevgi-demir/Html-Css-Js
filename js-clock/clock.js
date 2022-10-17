let person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("myName").innerHTML =
  "" + person+ "";
}

function showTime() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Pazar","Pazartesi","Salı","Çarsamba ","Perşembe","Cuma","Cumartesi"];
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =
    h + ":" + m + ":" + s +" "+ daylist[day] ;
    var t = setTimeout(showTime, 500);
   
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
console.log(showTime())