
$('.owlbanner').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    autoplay: true,
    dots: false,        
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.lastowl').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

function myFunction1() {
    document.getElementById("show1");
  }


// $('.owl-dot').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.owl-dot').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })
