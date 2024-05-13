var socialIcons = $('.social-icon'),
    siteHeight = $('body').height();

socialIcons.css({
    position: 'relative',
    background: 'yellow',
    zIndex: 10 
});


socialIcons.on('mouseenter',function() {
    $(this).animate({ top: (siteHeight - 100 ) }, 2000).fadeOut ();
});


var title = $('.post-title'),
    style = {
        position: 'relative',
        zIndex: 2
    };


title
    .css(style)
    .animate({left:600}, 4800 )
    .hide(200);

/* Promt */
/*
var cislo1 = prompt("Zadaj prvé číslo:");

if (cislo1 !==null && !isNaN(cislo1)) {
    var cislo2 = prompt("Zadaj druhé číslo:");

    if (cislo2 !==null && !isNaN(cislo2)) {
        cislo1 = parseFloat(cislo1);
        cislo2 = parseFloat(cislo2);
        var sucet = cislo1 + cislo2;
        alert("Výsledok sučtu je " + sucet + ".");

        var parny = sucet % 2 === 0;
        var vysledok = parny ? "párny" : "nepárny";

        alert("Výsledok súčtu je " + vysledok + ".");
    }
}*/

$('.post-title').on('click', function() {
    alert( $('.post-title').text() + ' Gulee!!!' );
});  
 

$(document).ready(function() {
    $("li").click(function() {
        $("li").removeClass("selected");
        $(this).addClass("selected");
    }) ;

} );
 
/*
function vynasobTrojkou() {
    var cislo = prompt("Zadajte číslo: ");
    var cisloCislo = parseFloat(cislo);
    if (!isNaN(cisloCislo)) {
        var vysledek = cisloCislo * 3;
        alert("Trojnásobok čísla " + cisloCislo+ " je " + vysledek);
    }   else {
        alert("Zadaný vstup nie je platné číslo.");
    }
 }
vynasobTrojkou();
*/

function ziskajTrojnasobok() {
    var cislo = prompt("Zadajte číslo:");
    var cisloCislo = parseFloat(cislo);

    if (!isNaN(cisloCislo)){
        var vysledok = cisloCislo * 3;
        return vysledok;
    } else {
        return null;
    }
}

var vysledok = ziskajTrojnasobok();

if (vysledok !== null) {
    alert ("Trojnásobok zadaného čísla je " + vysledok);
} else {
    alert("Zadaný vstup nebol platné číslo");
}