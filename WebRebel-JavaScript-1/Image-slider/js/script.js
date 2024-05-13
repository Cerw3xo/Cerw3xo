
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


	// ----------------------------------------------


	var menu = $('.menu'),
		menuLinks = menu.find('a');

	// po kliknuti na link v menu zoscrollujeme na prislunsu galeriu
	menuLinks.on('click', function(event)
	{
		event.preventDefault();
		
		var id = this.hash;
		$('html,body').animate({ scrollTop: $(id).offset().top }, function() {
			window.location.hash = id;
		});
	});


	// ----------------------------------------------


	// vytvorime link, cez ktory sa vieme vyscrollovat na vrch stranky
	var backToTop = $('<a>', { 
			href: '#home', 
			class: 'back-to-top',
			html: '<i class="fa fa-caret-up fa-5x"></i>'
		});

	// link pridame na stranku a naviazeme nan scrollovaciu funkciu
	backToTop
		.hide()
		.appendTo('body')
		.on('click', function() {
			$('html,body').animate({ scrollTop: 0 });
		});

	// zobrazime ho iba ak sme dostatocne hlboko v stranke
	var win = $(window);
	win.scroll(function() {
		if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
		else backToTop.hide();
	});

//------------------

/*var cover = $('#cover');
var	covers = $('.fadecovers');

	covers.children(':not(:last)').hide();
	

	var sliderInterval = setInterval(function() {
		covers.children(':last')
		.fadeOut(1500, function() {$(this).prependTo( covers );})
		.prev().fadeIn(1500);
	},2500);

	covers.on('click',function() {
		clearInterval ( sliderInterval );
	}); */

var cover = $('#cover');	
var	covers = $('.fadecovers');
covers.children(':not(:last)').hide();

var Slider = {  
	 intervalID: null,
	 running: false,
	 config: {
		fadeSpeed: 1000,
		delayTime: 1000    
	 },

	 set: function(id) {
		this.intervalID = id;
	 },

	 /*start: function(settings) {
		var slider = this;

		this.intervalID = setInterval(function() {
			covers.children(':last')
			.fadeOut(slider.config.fadeSpeed, function() {$(this).prependTo( covers );})
			.prev().fadeIn(slider.config.fadeSpeed);
		},slider.config.delayTime);
		this.running = true;
	 },*/
 
	 pause: function() {  
		clearInterval( this.intervalID );
		this.intervalID = null;
		this.running = false; 
	 },

	 resume: function() {
		if ( !this.intervalID ) this.start();
	 },

	 toggle: function() {
		if ( this.running ) this.pause();
		else this.resume();
	 },

	 next: function() {
		covers.children(':last')
			.fadeOut(this.config.fadeSpeed, function() {
				$(this).prependTo(covers);
			})
			.prev().fadeIn(this.config.fadeSpeed);
	 },

	 prev: function() {
		if (!this.running) {
		covers.children(':first')
		 .fadeOut(this.config.fadeSpeed, function() {
			$(this).appendTo(covers);
		 })
		 .prev().fadeIn(this.config.fadeSpeed);
		 }
		
	 }
};



/*Slider.start({
	fadeSpeed: 5000,
	delayTime: 5000
});*/

covers.on('click',function() {
	Slider.toggle();
});

$('#prevButton').on('click', function () {
	Slider.prev();
});

$('#nextButton').on('click', function() {
	Slider.next();
});
