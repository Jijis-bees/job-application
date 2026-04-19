setInterval(typeWriter, 1000);

var i = 0;
var txt = 'frontend-udvikler? UI/UX Designer? multimediedesigner?'; /* The text */
var speed = 210; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("start-txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}