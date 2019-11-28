
function myFunction() {
 document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/*
	cookie expires in one day
	24 hours in a day
	60 minutes in an hour
	60 seconds in a minute
	1000 milliseconds in a second
	*/

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function visitTime() {
	// create an instance of the Date object
	var currentTime = new Date();

	var visits = getCookie("counter");
	// if the cookie wasn't found, this is your first visit
	if (!visits) {
	  visits = 1; // the value for the new cookie
	  window.alert(	"This is your first time here. Time at first visit: " + currentTime.getHours() + ":" + currentTime.getMinutes());
	} else {
	  // increment the counter
	  visits = parseInt(visits) + 1;
	  window.alert(	"Last visited: " + currentTime + ". Current time: " + currentTime.getHours() + ":" + currentTime.getMinutes());
	}
	// set the new cookie
	setCookie("counter", visits, currentTime);

}