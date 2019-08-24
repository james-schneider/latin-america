function myFunction2(x) {
	if (x.matches) { // If media query matches
        document.getElementById("topnav-right").className = "topnav-right";
    } //else {
		//document.getElementById("topnav-right").className = "topnav-right.responsive";
    //}
}

var x = window.matchMedia("(min-width: 775px)")
myFunction2(x) // Call listener function at run time
x.addListener(myFunction2) // Attach listener function on state changes




function myFunction() {
    
	var x = document.getElementById("myTopnav");
	var y = document.getElementById("myDropdown");
	var z = document.getElementById("topnav-right");
	
	if (x.className === "topnav") {
        x.className += " responsive";
	}
	if (y.className === "dropdown") {
        y.className += " responsive";
    } 
	if (z.className === "topnav-right") {
		z.className += "responsive";
	}
	
	else { 
        x.className = "topnav";
		y.className = "dropdown";
		z.className = "topnav-right";
    }
}
