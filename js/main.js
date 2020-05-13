(function ($) {
	"use strict";

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});
	// owlCarousel
	$('.popular-product-active').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			469: {
				items: 2
			},
			767: {
				items: 3
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	})

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="ti-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	// grab an element
	var myElement = document.querySelector(".header-intelligent");
	// construct an instance of Headroom, passing the element
	var headroom = new Headroom(myElement);
	// initialise
	headroom.init();

	// preloader
	function browserSupportsCSSProperty(propertyName) {
		var elm = document.createElement('div');
		propertyName = propertyName.toLowerCase();

		if (elm.style[propertyName] != undefined)
			return true;

		var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
			domPrefixes = 'Webkit Moz ms O'.split(' ');

		for (var i = 0; i < domPrefixes.length; i++) {
			if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
				return true;
		}

		return false;
	}

})(jQuery);