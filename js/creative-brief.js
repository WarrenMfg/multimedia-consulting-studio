// Portfolio nav - for touch devices
function showSubNav() {
	var subNav = document.getElementById("sub-nav");

	if (window.innerWidth <= 768) {
		subNav.style.cssText = "display: initial";
	} else {
		subNav.style.cssText = "display: initial";
	}
};

function hideSubNav() {
	var subNav = document.getElementById("sub-nav");
	subNav.removeAttribute("style");
};

// Mobile navigation
var counter = 0;
function menu() {
	var menu = document.getElementById("menu");
	var header = document.getElementsByTagName("HEADER")[0];
	var nav = document.getElementsByTagName("NAV")[0];
	var mainNav = document.getElementById("main-nav");
	var vwAnchor = document.getElementsByClassName("vw-anchor");
	var subNav = document.getElementById("sub-nav");

	if (counter%2 == 0) {
		header.style.cssText = "width: 100vw; height: 100vh";
		menu.style.cssText = "text-align: right; font-size: 100px; margin-right: 5px; margin-top: -36px";
		menu.innerHTML = "&times;";

		nav.style.cssText = "display: block";
		mainNav.style.cssText = "display: block";
		for (let i = 0; i < vwAnchor.length; i++) {
			vwAnchor[i].style.cssText = "width: 100vw; padding: 10px";
		};

		counter++;
		console.log(counter);
	} else {
		header.removeAttribute("style");
		menu.removeAttribute("style");
		menu.innerHTML = "&#9776;";

		nav.removeAttribute("style");	
		mainNav.removeAttribute("style");	
		for (let i = 0; i < vwAnchor.length; i++) {
			vwAnchor[i].removeAttribute("style");
		};

		counter++;
		console.log(counter);
	}
};

// Search bar
function showSearchBar() {
	var searchSection = document.getElementById("search-section");
	var searchBarFocus = document.getElementById("page-search");

	if (searchSection.style.display != "initial") {
		searchSection.style.display = "initial";
		searchBarFocus.focus();
	} else {
		searchSection.style.display = "none";
	}
};

// On window resize
window.onresize = function () {
	var hideSearchSection = document.getElementById("search-section");
	
	if (window.innerWidth <= 768) {
		hideSearchSection.style.display = "none";
	} else {
		if (hideSearchSection.hasAttribute("style")) {
		hideSearchSection.removeAttribute("style");
		} 
		counter = 1;
		console.log(counter);
		menu();
	}
};

// Form validation
function validateForm() {
	var name = document.getElementById("form-name");
	var email = document.getElementById("form-email");
	if (name.value == "" || email.value == "") {
		if (email.value == "") {
			email.className = "form-error";
			email.focus();
		}
		if (name.value == "") {
			name.className = "form-error";
			name.focus();
		}
		alert("Please include a name and email address.");
		return false;
	}
};

function removeNameError() {
	document.getElementById("form-name").className = "";
};

function removeEmailError() {
	document.getElementById("form-email").className = "";
};

// Checkboxes
function checkbox(span) {
	var parent = document.getElementById(span);

	if (parent.style.backgroundColor != "rgb(58, 178, 227)") {
		parent.style.backgroundColor = "rgb(58, 178, 227)";
		parent.focus();
	} else {
		parent.removeAttribute("style");
		parent.focus();
	}
}