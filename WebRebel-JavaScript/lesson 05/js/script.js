var list = $(".jokes");
var copy = $(".copy");

//copy.before( $("<h1>Ja mám največší ....heading!!</h1>"));
//copy.after( $("<h1>Ja som kokot !!</ h1>"));
//$('<h3>Ja som menší podnadpis</h3>').insertBefore('.copy');
//$('<h2 class="btn-primary">No a ja som podnadpis Juudioo!!</h2>').insertAfter( '#content ' );



// skryjeme dd elemnty
list.find("dd").slideUp();
// zobrazimedd po kliknuti na term
list.find("dt").on("click", function ( event )
 {	
	var dt = $(this);
		dd = dt.next();

	//dd.remove();
	//dt.remove();
 

	dt.next().slideToggle()
		   .siblings("dd").slideUp();

	var newContent = dt.text() + dd.html();
	copy.prepend  ( newContent + "<hr>" );

	dt.add(dd)
		.clone(true)
		.css( { backgroundColor: "#bada55 "})
		.hide()
		.prependTo( list )
		.fadeIn();

	event.preventDefault();
 }); 

 var ul = $( '.list ');

 //ina varianta toho isteho napojenia na rodica a napojenie na cely html element..dole
 /*ul.on('click', 'li',function ()  {
	ul.append('<li>ja som tu novy</ li>');
 });   */

 $(document).on('click', 'ul.list li', function() {
	ul.append('<li> ja som žid židov!</li>');
 });