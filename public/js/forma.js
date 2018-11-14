/* global $*/ //dlya togo sob $ buv v cloud 9 ok
/* global myWindow*/
document.getElementById('page-loaded').innerHTML =
    (new Date()).toLocaleTimeString();

$(function() {
    $('#btn-submit').click(function(e) {
        e.preventDefault();
        //next code find in https://formspree.io/ > ctrl+f > $ > copy and modificate
        $.ajax({
            url: "https://formspree.io/reversx@gmail.com",
            method: "POST",
            data: {
                Name: $('#name').val(),
                Email: $('#email').val(), // if put "," add new dani to data and send 
                Telefon: $('#telefon').val(),
                Comment: $('#comment').val()
            },
            dataType: "json"
        }).done(
            function closeWin() {
     myWindow.close();
});
            
        //     function () { //dlya perevirky ch vidpravyvsya zapyt
        //     // $('forma').html('<h1>Thanks</h1>');
        //     $('#btn-submit').onClick="self.close()";
        // });
        
    });
});

// yahoo YQL baze to ajax
// add to site aend form and kurs valut, needet in more site API key


