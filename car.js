var x;
var m = 0;
function start() {
  x = setInterval(run, 80);

  function run() {
    console.log(m);
    if (m == 1260) {
      clearInterval(x);
      m = 0;
    } else {
      m = m + 10;
      document.getElementById("im").style.visibility = "visible";
      var target = document.getElementById("im");
      target.style.marginLeft = m + "px";
    }
  }
}

function stop() {
  clearInterval(x);
}
function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
