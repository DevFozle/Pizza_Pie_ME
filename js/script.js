$(function(){
  //=========wow js========== 
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
  // Venobox js
  $(document).ready(function(){
    $('.venobox').venobox(); 
  });
    //banner part slider
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
      // Navber sector
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
    
  
    //Chef slider
  $('.main-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false,
    fade: true,
    asNavFor: '.main-slider2'
  });
  $('.main-slider2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-slider1',
    centerMode: true,
    arrows: false,
    fade: true,
  });

  //Brands logo slider
  $('.brands-slider-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  });
  //pizza slider
  $('.main-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    dots: false,
    arrows: true,
    prevArrow: '#menu .Pleft',
        nextArrow: '#menu .Pright',
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // Preloader
  $(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut(500);
  });

  //Back to top button initialization
  $('.back-to-top').click(function(){
    $('html,body').animate({scrollTop: 0},1000);
  });

  //sticky navbar and back to button animation 
  $(window).scroll(function(){
    var scrollamount = $(this).scrollTop();
    
    if(scrollamount >= 300) {
      $('.back-to-top').addClass('back-to-top-animation');
    }
    else {
      $('.back-to-top').removeClass('back-to-top-animation');
    }
  });
  
});

// Email-validation
var email = document.getElementById('email');
var email_err = document.getElementById('email_error_msg');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function sub() {
    if (email.value == '') {
        email_err.innerHTML = "Enter Your Email Please!";
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }
    else if (!regex.test(email.value)) {
        email_err.innerHTML = "Enter Your Emali Correctly!";
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }
}
function errvalid() {
    if (email.value != '') {
        email_err.innerHTML = " ";
        email.style.border = '1px solid green';
    }
}
email.addEventListener('blur', errvalid);