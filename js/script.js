/*
cookie
*/
function visitTime() {
	// create an instance of the Date object
  var d = new Date();
  document.cookie="time="+d;
}

/*
animated canvas element
*/
function draw() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  animate(context, 0, 0);
}

function animate(context, x, y) {
  setTimeout ( function() {
    //clear old draw
    context.clearRect(0,0,3500,100);
    context.beginPath();
    context.font = "2em Verdana, sans-serif"
    context.fillText("open source first", x, y);
    //speed of animated text
    x = x + 2;
    y = 50;
    //width of animation
    if (x>2500) {
      x = 0
    };
    self.animate(context, x, y);
  },8
  );
}

/*
Get request with Ajax
*/
function getServerDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax-get-info.txt", true);
  xhttp.send();
}
