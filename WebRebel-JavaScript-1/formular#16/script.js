$("form").on("submit", function(event) {
    var email = $('#email').val();
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();
    var textControl = $("#text").val();

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    } 

    if(!isValidEmail(email)) {
        alert('Zadajte platnú e-mailovú adresu:')
        event.preventDefault();
    } else if (password.length < 8 ) {
        alert( "Heslo musí obsahovať min 8 znakov:");
        event.preventDefault();
    } else if (password !== passwordConfirm) {
        alert ('Hesla sa nezhodujú');
        event.preventDefault();
    } else if (textControl.trim() === '') {
        alert ("Textove pole nesmie byť prázdné.");
        event.preventDefault();
    }
});
