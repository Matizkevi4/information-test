$(document).ready(function() {
    var oldTime;
    // При прокрутке создается паралакс эффект у элемента с классом gallery
    var onScroll = function() {
        var scrollTop = $(this).scrollTop();
        $('.gallery').each(function(index, elem) {
            var element = $(elem);
            element.find('img').css('top', scrollTop - element.offset().top);
        });
    };
    onScroll.apply(window);
    $(window).on('scroll', onScroll);
    // Слайдер 
   /* var slideNow = 0; // Текущий слайд
    // Функция которая смещает тег с классом wrap на 100% экрана
    function swipe(nav_item) { 
        $('.wrap').animate({
            right:nav_item*100+'vw'
        }, 1000);
        var navig = '.navigator_item_slide_'+(nav_item+1);
        $('.navigator_item-active').removeClass('navigator_item-active');
        $(navig).addClass('navigator_item-active');
    }
    var sliderInterval = setTimeout(slInterval,10000);
    function slInterval(){// Функция для автоматического смещения слайда каждые 10 секунд
        if (slideNow == 4) { slideNow = -1;}
        sliderInterval = setTimeout(slInterval,10000);
        slideNow++;
        swipe(slideNow);
    }
    // Функция предназначенная для меню(слайдера), при нажатии на пункт происходит смещение 
    function slider(elem) {
        $(elem).on('click', function(){
            var nav_item = $(this).index();
            clearTimeout(sliderInterval);
            sliderInterval = setTimeout(slInterval,10000);
            if ( nav_item != slideNow) {
                swipe(nav_item);
                slideNow = nav_item;
            }
        });
    }
    slider('.gallery_navigator_item');*/

    var currentSlide = 0; // Текущий слайд
    var SlideTime = 10000; // Время переключения между слайдами
    var is_animate = false; // Воспроизводится анимация?
    var sliderWrap = $('.wrap');
    var slideWidth = $('.wrap img').outerWidth();
    var scrollSlider = sliderWrap.position().left - slideWidth;
    var Timer;
    var Timer2;
    autoSlider();
    function autoSlider() {
        Timer = setTimeout(function(){
            if(!is_animate) {
                is_animate = true;
                currentSlide++;
                if ( currentSlide == sliderWrap.children().length) {
                    currentSlide = 0;
                }
                sliderWrap.animate({right:currentSlide*100+"vw"},1000,function(){
                    is_animate = false;
                });
                var navItmElem_act = $('.navigator_item-active');
                if (navItmElem_act.index() == $('.gallery_navigator_item').length-1) {
                    navItmElem_act.removeClass('navigator_item-active');
                    $('.gallery_navigator_item:first').addClass('navigator_item-active');
                }
                else {
                    navItmElem_act.removeClass('navigator_item-active').next().addClass('navigator_item-active');
                }
                autoSlider();
            }
        },SlideTime);
    }

    $('.gallery_navigator_item').on('click', function(){
        var nav_item = $(this).index();
        console.log(nav_item!=currentSlide);
        if ( nav_item != currentSlide) {
            sliderWrap.animate({right:nav_item*100+"vw"},1000);
            currentSlide=nav_item;
            $('.navigator_item-active').removeClass('navigator_item-active');
            var temp = '.navigator_item_slide_'+(currentSlide+1);
            $(temp).addClass('navigator_item-active');
        }
        clearTimeout(Timer);
        clearTimeout(Timer2);
        Timer2 = setTimeout(autoSlider,SlideTime);
    });



    //    $('#material-block_books_image').mouseover(function(){
    //        $($('#material-block_books_image').find('img')[0]).fadeOut(150,function(){
    //            $($('#material-block_books_image').find('img')[1]).removeClass('material-icon');
    //            $($('#material-block_books_image').find('img')[1]).addClass('material-icon_active');
    //            $('#material-block_books_image').addClass('material-block_image-active');
    //            $('#material-block_books_image').find('span').addClass('material-block_header-active');
    //        });
    //    });
    //    $('#material-block_books_image').mouseout(function(){
    //       /* var img = $('#material-block_books_image').find('img');
    //        var lastIndex = img[0].src.lastIndexOf("_");
    //        $($('#material-block_books_image').find('img')[0]).fadeIn(250,function(){
    //            $('#material-block_books_image').prepend('<img src='+img[0].src.substring(0, lastIndex)+'.png alt="">');
    //        });*/
    //        $($('#material-block_books_image').find('img')[0]).fadeIn(150,function(){
    //           /* $($('#material-block_books_image').find('img')[1]).removeClass('material-icon_active');
    //            $($('#material-block_books_image').find('img')[1]).addClass('material-icon');
    //            $('#material-block_books_image').removeClass('material-block_image-active');
    //            $('#material-block_books_image').find('span').removeClass('material-block_header-active');*/
    //        });
    //    });

    $('.material-block_image').each(function(index,elem) { // Изменение цвета иконок материал
        var element = $(elem);
        element.mouseover(function(){ // При наведении
            var img = element.find('img')[0].src; // Найти элемент 1-й элемент img в DOM 
            var lastIndex = img.lastIndexOf("."); // Найти в src "."
            element.find('img')[0].src = img.substring(0, lastIndex)+'_dark.png'
            //element.append('<img src='+img.substring(0, lastIndex)+'_dark.png'+' alt="">'); // Изменить src, добавить приставку _dark
            element.addClass('material-block_image-active'); // (НЕОБЯЗАТЕЛЬНО) Добавить класс для изменения рамки вокруг ссылки (реализованно с помощью hover в scss)
            element.find('span').addClass('material-block_header-active'); // Добавить класс (изменение цвета span(Надписи))
        });
        element.mouseout(function(){
            var img = element.find('img')[0].src;
            var lastIndex = img.lastIndexOf("_");
            element.find('img')[0].src = img.substring(0, lastIndex)+'.png'
            element.removeClass('material-block_image-active');
            element.find('span').removeClass('material-block_header-active');
        });
    });

    // Placeholder для написать нам
    // Функция описана в файле ChangePlaceholder.js
    changePlaceholder('.write-to-us_inp_FS_name','Имя и фамилия');
    changePlaceholder('.write-to-us_inp_email','Email');
    changePlaceholder('.write-to-us_textMessage','Текст сообщения');

    // changeSocialIcon изменение соц. кнопок при наведении
    // Функция описана в файле ChangeSocialIcon.js
    changeSocialIcon('#social_vk', 'img/social_icon/social_vk_white.png', '', 'social_vk-active');
    changeSocialIcon('#social_facebook', 'img/social_icon/social_facebook_white.png', '', 'social_facebook-active');
    changeSocialIcon('#social_twitter', 'img/social_icon/social_twitter_white.png', '', 'social_twitter-active');


});
