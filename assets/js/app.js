jQuery(window).load(function() {
	
	"use strict";
	
	jQuery("#loader").delay(100).fadeOut();
	jQuery("#loader-wrapper").delay(100).fadeOut("fast");

	//FUNCTIONS LOAD
	jQuery(window).ready(function(){
		//CHECKBOX TERM
		jQuery('.checkAutorizo input[type="radio"]').click(function(){
		if(jQuery(this).is(":checked")){
			// setTimeout(function(){ jQuery('.container-checkbox').scrollTop(0);}, 1);
			Swal.fire({
			title: false,
			html:
				'<img src="./assets/images/logo.svg" class="image-modal-tratamiento-datos" />'+
				'<div class="modal-tratamiento-datos"><h4>Te informamos tus derechos como Titular de Datos Personales y los deberes del Responsable del Tratamiento de tus Datos</h4><p><b>a)</b> Tienes derecho a conocer, actualizar y rectificar tus datos personales, así como a solicitar prueba de la autorización otorgada al responsable del Tratamiento.</p><p><b>b)</b> El Responsable del Tratamiento deberá informarte previa recolección de tus Datos el Tratamiento que se le dará y la finalidad del mismo. Recuerda que las finalidades te las informamos en el escrito de autorización que encuentras <a href="../wp-content/themes/pracodidacol/assets/pdf/FINALIDADES DE LA AUTORIZACIÓN PARA EL USO Y TRATAMIENTO DE DATOS PERSONALES.pdf" target="_blank">Aquí.</a></p><p><b>c)</b> Tienes derecho a revocar la autorización y a solicitar la supresión de tus Datos. </p><p><b>d)</b> Ante la Superintendencia de Industria y Comercio podrás presentar quejas por infracciones a la Ley 1581 de 2012 en las que incurra el Responsable.</p><p>En caso de que desees revocar tu autorización o tengas alguna consulta o reclamo en materia de datos personales contáctanos al correo electrónico: <a href="mailto:didacol@didacol.com" target="_blank">didacol@didacol.com</a></p><p>Puedes consultar nuestra política de tratamiento aquí: <a href="https://www.pracodidacol.com/" target="_blank">www.pracodidacol.com</a></p></div>',  
			confirmButtonText: 'Entendido'
			});
			jQuery('.checkAutorizoInfo').slideDown(300);
			jQuery("body, html").animate({scrollTop: jQuery(jQuery('.checkAutorizoInfo')).offset().top - 350}, 300);
		}
		});
		jQuery('.checkNoAutorizo input[type="radio"]').click(function(){
			if(jQuery(this).is(":checked")){
				jQuery('.checkAutorizoInfo').slideUp(300);
				// setTimeout(function(){ jQuery('.container-checkbox').scrollTop(0);}, 1);
			}
		});
	});
	
	jQuery(window).on('scroll', function() {		
						
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = jQuery(window).scrollTop();
		
		if( b > 72 ){		
			jQuery(".navbar").addClass("scroll");
		} else {
			jQuery(".navbar").removeClass("scroll");
		}	

		var altoScreen = jQuery(window).height();

		if( b > altoScreen ){		
			jQuery(".bgForm").addClass("close");
		} else {
			jQuery(".bgForm").removeClass("close").removeClass('open');
		}	
		if( b > altoScreen ){		
			jQuery(".openForm").addClass("open");
		} else {
			jQuery(".openForm").removeClass("open");
		}				

	});

});


    //Navigation Menu Slider
	jQuery(document).ready(function( $ ) {
		"use strict";
        $('.navbar-nav li.nav-item').on('click', function() {				
			$('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navbarSupportedContent').removeClass("show");				
		});

		$('.openForm').on('click', function() {				
			$('.bgForm').toggleClass('open');
		});

		$('.slim-wrap ul.menu-items.collapsed li a').on('click', function() {				
			$('.collapse-button').click();
		});



		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		$('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});
		
		
		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).on('scroll', function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).on('click', function(event){
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();



});