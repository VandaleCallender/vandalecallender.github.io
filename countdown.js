var comingdate = new Date("July 1, 2019 00:00:00");

var d = document.getElementById('d');
var d = document.getElementById('h');
var d = document.getElementById('m');
var d = document.getElementById('s');

var x = setInterval(function () {
    var now = new Date();
    var des = comingdate.getTime() - now.getTime();
    var days = Math.floor(des / (1000 * 60 * 60 * 24));
    var hours = Math.floor(des % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(des % (100 * 60 * 60) / (1000 * 60));
    var secs = Math.floor(des % (1000 * 60) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(minutes);
    s.innerHTML = getTrueNumber(secs);

    if (des <= 0) clearInterval(x);

}, 1000);

function getTrueNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}