/*
cookie
*/
function visitTime() {
	// create an instance of the Date object
  var d = new Date();
  document.cookie="time="+d;
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
