﻿( function($) {
  'use strict';
  	

  	/* Window Load */
	$(window).on('load',function(){
		$('.loader').fadeOut(1000);
        $('.line').addClass('active');
	});


    /* Navbar scroll*/
    $('.navbar-nav ul li a').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top)
            }, 1000);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });



    

    /* Full page scroll*/
    if ($('#pagepiling').length > 0){

        $('#pagepiling').pagepiling({
            scrollingSpeed: 280,
            navigation:false,
            menu: '.navbar-nav',
            anchors: ['home', 'counter', 'bride', 'groom','gallary' ,'video', 'events', 'contact', 'rsvp'],
            afterRender: function(anchorLink, index){ 
              NavbarColor();

            },
            afterLoad: function(anchorLink, index){
                $('.pp-section .intro').removeClass('animate');
                $('.active .intro').addClass('animate');
                NavbarColor();
            }
        });

  

        function NavbarColor(){
         if ($('.pp-section.active').hasClass('navbar-is-white')){
                $('.navbar-desctop').addClass('navbar-white');
                $('.progress-nav').addClass('progress-nav-white');
                $('.navbar-bottom').addClass('navbar-bottom-white');
            }
            else{
                $('.navbar-desctop').removeClass('navbar-white');
                $('.progress-nav').removeClass('progress-nav-white');
                $('.navbar-bottom').removeClass('navbar-bottom-white');
            }
        }
    }

    $('.popup-youtube').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    /* Change bacgkround on project section*/
    $('.project-box').on('mouseover',function(){
        var index = $('.project-box').index(this);
        $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });

    /* Carousel Gallary */
    $('.carousel-gallary').owlCarousel({
	    loop:true,
	    margin:10,
        nav:true,
	    dots:true,
	    items:3,
        autoplay:true,
        responsive : {
            0 : {
                items:1,
            },
            480 : {
                items:2,
            },
            920 :{
                items:3,
            }
        }
	});
    /* Carousel Event */
    $('.carousel-testimonials').owlCarousel({
	    loop:true,
	    margin:10,
        nav:true,
	    dots:true,
	    items:2,
        responsive : {
            0 : {
                items:1,
            },
            480 : {
                items:1,
            },
            768 : {
                items:2,
            },
        }
	});

    /* Send form */
	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('#success-message').show();
		                },

		                error: function(){
		                	$('#error-message').show();
			            }
			        });
			    }
			});
		});
	}
    
})(jQuery);

// Counter ================================

var counter = setInterval(function() { 
    
    var endTime = new Date("31 December 2023 00:00:00");			
    endTime = (Date.parse(endTime) / 1000);
    
    var now = new Date();
    now = (Date.parse(now) / 1000);
    
    var timeLeft = endTime - now;
    
    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
    if (hours < "10") { hours = "0" + hours; };
    if (minutes < "10") { minutes = "0" + minutes; };
    if (seconds < "10") { seconds = "0" + seconds; };
    
    document.getElementById("clock").innerHTML = '<div>' + days + '<span>days</span></div>' + '<div>' + hours + '<span>hours</span></div>' +
    '<div>' + minutes + '<span>min</span></div>' + '<div>' + seconds + '<span>sec</span></div>'
    
    if(timeLeft < 1){
        clearInterval(counter);
        document.getElementById("CounterTextOff").innerHTML = ` <h2 class="heading">We are <span class="text-primary">Happyli Married</span></h2> `
        document.getElementById("clock").innerHTML = ' ';
        document.getElementById("merried-couple").src = './img/merried.png'
        document.getElementById("merried-couple").style.width = '100%'
    };
    
}, 1000);
