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

// Slideshow
var clickCounter;
function slideshow(clicked) {

	clickCounter = clicked;
	var digitalSlides = document.getElementById("digital-slides");
	var closeSlides = document.getElementById("close-slides");
	var nextSlide = document.getElementById("next-slide");
	var previousSlide = document.getElementById("previous-slide");
	var images = document.getElementsByTagName("img");

	digitalSlides.className = "digital-slides-in";
	closeSlides.className = "close-slides-in";
	nextSlide.className = "next-slide-in";
	previousSlide.className = "previous-slide-in";

	for (i = 0; i < images.length; i++) {
		images[i].removeAttribute("style");
		images[i].parentElement.classList = "";
	}

	images[clicked].style.cssText = "display: block";
	images[clicked].parentElement.className = "img-container";
}
window.onload = function() {
	closeSlides();
}

// To close slides
function closeSlides() {
	var digitalSlides = document.getElementById("digital-slides");
	var closeSlides = document.getElementById("close-slides");
	var nextSlide = document.getElementById("next-slide");
	var previousSlide = document.getElementById("previous-slide");

	digitalSlides.className = "digital-slides-out";
	closeSlides.className = "close-slides-out";
	nextSlide.className = "next-slide-out";
	previousSlide.className = "previous-slide-out";
}

// Next slide
function nextSlide() {

	var nextSlide;

	if (clickCounter < 14) {
		nextSlide = clickCounter + 1;
		slideshow(nextSlide);
	} else {
		nextSlide = 0;
		slideshow(nextSlide);
	}
}

// Previous slide
function previousSlide() {

	var previousSlide;

	if (clickCounter > 0) {
		previousSlide = clickCounter - 1;
		slideshow(previousSlide);
	} else {
		previousSlide = 14;
		slideshow(previousSlide);
	}
}

