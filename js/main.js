$(document).ready(function () {
    $('.slider').owlCarousel({
        items: 2,
        navigation: true,
        pagination: false
    });

    $('.prizes-slider').owlCarousel({
        items: 1,
        navigation: true,
        pagination: false
    });

    $(".scroll").nanoScroller({

        contentClass: 'scroll_content'
    });
});