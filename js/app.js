$(function(){
    $('#banner').slick({
        arrows: true,
        dots: false,
        prevArrow:'#banner .banner_slider .arrows .rightArrows',
    nextArrow:"#banner .banner_slider .arrows .leftArrows",
    slidesToShow: 1,
    slidesToScroll: 1
      
    })
    $('.testimonial_slider').slick({
        arrows:true,
        dots:false,
        prevArrow: '#testimonial .arrows .rightArrows',
        nextArrow: '#testimonial .arrows .leftArrows',
        slidesToShow:2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                slidesToShow: 2,
                infinite: true,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  arrows: false,
                  slidesToShow: 1,
                  infinite: true,
                }
            }
            
          ]
    })
    $('.latest_slider').slick({
        arrows:true,
        dots:false,
        prevArrow: '#latest .arrows .rightArrows',
        nextArrow: '#latest .arrows .leftArrows',
        slidesToShow:4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                slidesToShow: 3,
                infinite: true,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                  infinite: true,
                }
            }
            
          ]

    })
    $(".countdown").countdown("2025/12/25 16:30:45" , function(e){
        let time = e.strftime("%D days %H:%M:%S");
         $(".countdown .days").html(e.strftime("%D"))
         $(".countdown .hours").html(e.strftime("%H"))
         $(".countdown .minutes").html(e.strftime("%M"))
         $(".countdown .sec").html(e.strftime("%S"))
    
       })
})