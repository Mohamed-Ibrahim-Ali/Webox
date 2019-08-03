$(function () {


    $(window).scroll(function () {

        if ($(this).scrollTop()>= 200) {

            $('nav').css('background','#fff')
        } else{
            $('nav').css('background','transparent')
        }

    });

    $('html').niceScroll({
        cursorcolor: '#4fb8aa'
    });

/*Start Nav*/
    $('nav .collapse a').click(function () {

        $('html, body').animate({

            scrollTop: $('.'+ $(this).data('value')).offset().top
            
        }, 1000);

    });

    $('nav .collapse a').click(function () {

        $(this).addClass('acte').siblings().removeClass('acte');

    });
/*End Nav*/
/*Start home*/
$('.home').height($(window).height());

$('.down').click(function () {

    $('html, body').animate({

        scrollTop : $('.about').offset().top

    }, 1000)

});
/*End home*/
/*Start Portfolio*/
    $('.portfolio li').click(function () {

        $(this).addClass('act').siblings().removeClass('act');

        if ($(this).data('class') === 'all'){

            $('.portfolio .col-md-3').show(1000);

        }else {

            $('.portfolio .col-md-3').hide();

            $('.'+ $(this).data('class')).show(1000);
        }
    });
/*End Portfolio*/
/*Start Counter*/
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });
/*Start Counter*/
/*Start Team*/
    var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop:true,
            margin:20,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:2
                },
                800:{
                    items:3
                }
            },
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        });

/*End Team*/
/*Start Up*/
$('.up').click(function () {

        $('html, body').animate({scrollTop: 0}, 1000);

});

$(window).scroll(function () {

    if ($(this).scrollTop()>= 200) {

        $('.up').show();

    } else {

        $('.up').hide();
    }

});

/*End Up*/

/*Start Spinner */
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
/*End Spinner */
/*Start Animation*/

    new WOW().init();
    
/*End Animation*/
});

$(window).on('load', function () {

    $('.spinner').fadeOut(5000);

});