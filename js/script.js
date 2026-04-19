setInterval(typeWriter, 1000);

var i = 0;
var txt = 'frontend-udvikler.'; /* The text */
var speed = 220; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("profile-txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}