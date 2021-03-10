$(function(){
    //banner part slider initialization
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1500,
        arrows: true,
        prevArrow: '#banner .left',
        nextArrow: '#banner .right'
      });
    //Pizza Slider
    $('.main-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        arrows: true,
        prevArrow: '#menu .Pleft',
        nextArrow: '#menu .Pright'
      });

      $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $('.navbar').addClass('bg');
        }
        else {
            $('.navbar').removeClass('bg');
        }
    });
    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});