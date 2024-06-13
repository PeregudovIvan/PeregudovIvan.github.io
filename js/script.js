$(document).ready(function(){

    $('[data-modal=contact]').on('click', function() {
        $('.overlay, #contact').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #contact').fadeOut('slow');
    });


    $('form').submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#contact').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

});