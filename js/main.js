$(document).ready(function() {
    var onScroll = function() {
        var scrollTop = $(this).scrollTop();
        $('.gallery').each(function(index, elem) {
            var $elem = $(elem);
            $elem.find('img').css('top', scrollTop - $elem.offset().top);
        });
    };
    onScroll.apply(window);
    $(window).on('scroll', onScroll);
   /* function changeSlide(offset){

    }*/
    var slideNow = 0;
    /*$('.gallery_navigator_item').on('click', function(){
        var nav_item = $(this).index();
        if ( nav_item != slideNow) {
            $('.wrap').animate({
                right:nav_item*100+'vw'
            }, 1000);
            slideNow = nav_item;
            $('.navigator_item-active').removeClass('navigator_item-active');
            $(this).addClass("navigator_item-active");
        }
    });*/
    function slider(elem) {
    $(elem).on('click', function(){
        var nav_item = $(this).index();
        if ( nav_item != slideNow) {
            $('.wrap').animate({
                right:nav_item*100+'vw'
            }, 1000);
            slideNow = nav_item;
            $('.navigator_item-active').removeClass('navigator_item-active');
            $(this).addClass("navigator_item-active");
        }
    });
}
    slider('.gallery_navigator_item');
});