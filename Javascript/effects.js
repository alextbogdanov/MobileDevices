$(document).ready(function() {
    // RESPONSIVE NAV JS
    $('#nav-reponsive-toggle').click(function() {
        $('#nav-reponsive-wrapper').toggleClass('toggled');
    });

    // SMOOTH SCROLL JS
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
});
