(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();
  
	$('.navbar-toggler').on('click', function() {
	  if (!$('#mainNav').hasClass('navbar-reduce')) {
		$('#mainNav').addClass('navbar-reduce');
	  }
	});
  
	// Preloader
	$(window).on('load', function () {
	  if ($('#preloader').length) {
		$('#preloader').delay(100).fadeOut('slow', function () {
		  $(this).remove();
		});
	  }
	});
  
	// Back to top button
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	  } else {
		$('.back-to-top').fadeOut('slow');
	  }
	});
  
	$('.back-to-top').click(function(){
	  $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
	  return false;
	});
  
	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
	  $('html, body').animate({
		scrollTop: 0
	  }, 1000);
	});
  
	/*--/ Star Counter /--*/
	$('.counter').counterUp({
	  delay: 15,
	  time: 2000
	});
  
	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: (target.offset().top - navHeight + 5)
		  }, 1000, "easeInOutExpo");
		  return false;
		}
	  }
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
	  $('.navbar-collapse').collapse('hide');
	});
  
	// Initialize scrollspy with larger offset
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: navHeight + 50
	});
  
	// Combined scroll handler for all scroll-related functionality
	$(window).on('scroll', function () {
	  var pixels = 50;
	  var top = 1200;
	  var currentTop = $(window).scrollTop();
  
	  // Update active state based on scroll position
	  $('section').each(function() {
		var elementTop = $(this).offset().top - (navHeight + 50);
		var elementBottom = elementTop + $(this).outerHeight();
		
		if (currentTop >= elementTop && currentTop <= elementBottom) {
		  var id = $(this).attr('id');
		  $('.navbar-nav a').removeClass('active');
		  $('.navbar-nav a[href="#' + id + '"]').addClass('active');
		}
	  });
  
	  // Navbar transformation
	  if (currentTop > pixels) {
		$('.navbar-expand-md').addClass('navbar-reduce');
		$('.navbar-expand-md').removeClass('navbar-trans');
	  } else {
		$('.navbar-expand-md').addClass('navbar-trans');
		$('.navbar-expand-md').removeClass('navbar-reduce');
	  }
  
	  // Scroll to top button visibility
	  if (currentTop > top) {
		$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
	  } else {
		$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
	  }
	});
  
	// Trigger initial scroll
	$(window).trigger('scroll');
  
	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
	  var typed_strings = $('.text-slider-items').text();
	  var typed = new Typed('.text-slider', {
		strings: typed_strings.split(','),
		typeSpeed: 80,
		loop: true,
		backDelay: 1100,
		backSpeed: 30
	  });
	}
  
	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
	  margin: 20,
	  autoplay: true,
	  autoplayTimeout: 4000,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
		  items: 1,
		}
	  }
	});
  })(jQuery);