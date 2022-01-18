var names = document.getElementById('name');
var name_err = document.getElementById('name_error');

function form_valid(){
    if(names == ''){
        name_err.innerHTML = 'Enter your name';
        name_err.style = 'color: red;';
        names.style = 'border-color: red;';
        return false;
    }
}
form_valid();
// ____________________________________________________________________________________________

$(function(){
    $('.btn').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 3000);
    });

    $(window).scroll(function(){
        var abc = $(this).scrollTop();

        if (abc > 100) {
            $('.btn').fadeIn();
        }
        else{
            $('.btn').fadeOut();
        }
    });
// scroll part end



    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right next"></i>',
        dots: true,
      });
// banner slider part end




      $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left prev"></i>',
        nextArrow: '<i class="fa fa-chevron-right next"></i>',
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 300,
      });
    //   review slider part end 
})