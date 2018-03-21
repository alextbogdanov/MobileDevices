// STAGES JS
var stagesSlideshow = function() {
    $('#slide-next-stages').click(function() {
        var currentSlide = $('.current-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.current-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.slide-dot').first();
        }

        currentSlide.fadeOut(600).removeClass('current-slide');
        nextSlide.fadeIn(600).addClass('current-slide');

        currentDot.removeClass('current-dot');
        nextDot.addClass('current-dot');
    });

    $('#slide-prev-stages').click(function() {
        var currentSlide = $('.current-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.current-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length === 0) {
          prevSlide = $('.slide').last();
          prevDot = $('.slide-dot').last();
        }

        currentSlide.fadeOut(600).removeClass('current-slide');
        prevSlide.fadeIn(600).addClass('current-slide');

        currentDot.removeClass('current-dot');
        prevDot.addClass('current-dot');
    });
};

// SMARTPHONE JS
var smartphoneSlideshow = function() {
    $('#slide-next-smartphone').click(function() {
        var currentSlideSmartphone = $('.current-slide-smartphone');
        var nextSlideSmartphone = currentSlideSmartphone.next();

        var currentDotSmartphone = $('.current-dot-smartphone');
        var nextDotSmartphone = currentDotSmartphone.next();

        if(nextSlideSmartphone.length === 0) {
            nextSlideSmartphone = $('.slide-smartphone').first();
            nextDotSmartphone = $('.slide-dot-smartphone').first();
        }

        currentSlideSmartphone.fadeOut(600).removeClass('current-slide-smartphone');
        nextSlideSmartphone.fadeIn(600).addClass('current-slide-smartphone');

        currentDotSmartphone.removeClass('current-dot-smartphone');
        nextDotSmartphone.addClass('current-dot-smartphone');
    });

    $('#slide-prev-smartphone').click(function() {
        var currentSlideSmartphone = $('.current-slide-smartphone');
        var prevSlideSmartphone = currentSlideSmartphone.prev();

        var currentDotSmartphone = $('.current-dot-smartphone');
        var prevDotSmartphone = currentDotSmartphone.prev();

        if(prevSlideSmartphone.length === 0) {
          prevSlideSmartphone = $('.slide-smartphone').last();
          prevDotSmartphone = $('.slide-dot-smartphone').last();
        }

        currentSlideSmartphone.fadeOut(600).removeClass('current-slide-smartphone');
        prevSlideSmartphone.fadeIn(600).addClass('current-slide-smartphone');

        currentDotSmartphone.removeClass('current-dot-smartphone');
        prevDotSmartphone.addClass('current-dot-smartphone');
    });
};

$(document).ready(stagesSlideshow);
$(document).ready(smartphoneSlideshow);
