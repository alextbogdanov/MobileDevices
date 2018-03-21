$(document).ready(function() {

    // CHOOSE TOPIC HOVER JS

    $('.choose-topic-card').hover(function() {
        $(this).addClass('hovered');
    }, function() {
        $(this).removeClass('hovered');
    });
    $('#first-topic-card').click(function() {
        window.location.href = 'history.html';
    });
    $('#second-topic-card').click(function() {
        window.location.href = 'devices.html';
    });
    $('#third-topic-card').click(function() {
        window.location.href = 'gsm.html';
    });

    // DO YOU KNOW CARD FLY IN JS

    $(document).scroll(function() {
        var currentPos = $(window).scrollTop();
        if(currentPos >= $('#choose-topic').offset().top) {
            $('#first-dyk-card').animate({left: '0'}, 'slow');
        }
        if(currentPos >= $('#first-dyk-card').offset().top - 70) {
            $('#second-dyk-card').animate({right: '0'}, 'slow');
        }
        if(currentPos >= $('#second-dyk-card').offset().top - 70) {
            $('#third-dyk-card').animate({left: '0'}, 'slow');
        }
    });

    // DO YOU KNOW CARD CONTENT ALIGNMENT JS
    var doYouKnowContentHeight = $('.do-you-know-content').height();

    $('.do-you-know-content').css({
        'top': '50%',
        'margin-top': '-' + doYouKnowContentHeight /  2 + 'px'
    });
    $(window).resize(function() {
        var doYouKnowContentHeightResized = $('.do-you-know-content').height();
        $('.do-you-know-content').css({
            'top': '50%',
            'margin-top': '-' + doYouKnowContentHeightResized /  2 + 'px'
        });
    });

    // CONTACT US ALIGNMENT
    var contactFormWidth = $('#contact-us-wrapper > form').width();
    $('#contact-us-wrapper > form').css({
        'left': '50%',
        'margin-left': '-' + contactFormWidth / 2 + 'px'
    });
    $(window).resize(function() {
        var contactFormWidthResized = $('#contact-us-wrapper > form').width();
        $('#contact-us-wrapper > form').css({
            'left': '50%',
            'margin-left': '-' + contactFormWidthResized / 2 + 'px'
        });
    });
});
