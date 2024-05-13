

	var gallery = $('.gallery'),
		startingOpacity = gallery.find('img').css('opacity');

	// animujeme opacity na hover
	gallery.find('img').on('mouseenter mouseleave', function(event){
		var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
		$(this).fadeTo(200, opacity);
	});


	// vytvorime si overlay
	var overlay = $('<div>', { id: 'overlay' });
		overlay.appendTo('body').hide();

	overlay.on('click', function() {
		$(this).fadeOut('fast');
	});


	// skryjeme overlay na escape
	$(document).on('keyup', function(event) {
		if ( event.which === 27 ) overlay.fadeOut('fast');
	});


	// po kliknuti zobrazime lightbox
	gallery.find('a').on('click', function(event)
	{
		var href = $(this).attr('href'),
			image = $('<img>', { src: href, attr: 'learn2code' });

		overlay.html( image )
			   .show();

		event.preventDefault();
	});


	// -------Scrollovanie--------

	/*var menu = $('.menu'),
		menuLinks = menu.find('a');
  // zoscrolluj dole 
	menuLinks.on('click', function (event)
	 {
		var id = this.hash;

		$('html').animate( { scrollTop: $(id).offset().top }, 1000, function() {
			window.location.hash = id;
		});
 // vypne defaultne nastavenia
		event.preventDefault();

	}); */

	// Back to top

	var backToTop = $('<a>', {
				 href: '#home',
				 class: 'back-to-top',
				 html: '<i class="fa fa-caret-up fa-5x"></i>'
	});

	backToTop
		.hide()
		.appendTo('body')
		.on('click', function () {
			$('body,html').animate( {
				scrollTop: 0
			});
		});

	var win = $(window);
		win.on('scroll', function() {
			if ( win.scrollTop() >= 400) backToTop.fadeIn();
			else backToTop.fadeOut();
		});

// animacie 

/*$('.post-title')
		.css({position: 'relative' })
		.animate({left: 400}, {
			duration: 1000,
			queue: false
		 })
		.animate({top: -400},500);  */
$.fx.speeds.slowAsShit = 2000;

var colors = [ '#3b9ae1', '#f6be00', '#e64134', '#eb70b1', '#0f1a5f' ];

		$('.navbar-menu ').find('li').on('mouseenter', function() {
			if ( $(this).is(':animated') ) return; 
			var newColor = colors[Math.floor(Math.random() * colors.length)];
			$(this).animate({ backgroundColor: newColor }, 'slowAsShit' );
		});

		 
// Galérié !!!
//najdeme všetky galérie a skryjeme ich 


String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

var galleries = $('.gallery-set');
galleries.hide();

var selected = $('.controls').find('.selected'),
	selectedGallery;

function showGallery(selected) {
    if (selected.length) {
        var id = selected.find('a').attr('href');
        selectedGallery = $(id);        
    }

    var newGallery = selectedGallery.length ? selectedGallery : galleries.eq(0);
    galleries.not(newGallery).hide();
	newGallery.show().addClass('fadeInRight')
}
showGallery( selected);

$('.controls a').on('click', function(event) {
    var li = $(this).parent();
	

    li.addClass('selected')
      .siblings().removeClass('selected');

    showGallery(li );

    event.preventDefault();
});