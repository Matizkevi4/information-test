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

    $('.material-block_image').each(function(index,elem) { // Изменение цвета иконок материал
        var element = $(elem);
        
        element.mouseover(function(){
            var img = element.find('img')[0].src;
            var lastIndex = img.lastIndexOf(".");
            element.find('img')[0].src = img.substring(0, lastIndex)+'_dark.png';
            element.parent().parent().addClass('material-block_books-active');
            element.find('span').addClass('material-block_header-active');
        });
        element.mouseout(function(){
            var img = element.find('img')[0].src;
            var lastIndex = img.lastIndexOf("_");
            element.find('img')[0].src = img.substring(0, lastIndex)+'.png'
            element.parent().parent().removeClass('material-block_books-active');
            element.find('span').removeClass('material-block_header-active');
        });
    });

    function changePlaceholder(elem,message) { //Элемент с placeholder и сообщение
        var placeholder = $(elem);
        $(elem).addClass('write-to-us_input_text');
        placeholder.focus(function(){
            placeholder.attr('placeholder','');
        });
        placeholder.blur(function(){
            placeholder.attr('placeholder',message);
        });
    }
    changePlaceholder('.write-to-us_inp_FS_name','Имя и фамилия');
    changePlaceholder('.write-to-us_inp_email','Email');
    changePlaceholder('.write-to-us_textMessage','Текст сообщения');
    //write-to-us_textMessage 
    //write-to-us_inp_email
    //write-to-us_inp_FS_name

    // changeSocialIcon
    // changeSocialIcon принимает 3 параметра:
    // 1. id ссылки
    // 2. путь к исходному изображению
    // 3. путь к изображению на которое будет заменяться исходное
    // 4. добавляемый класс (в css должен быть соответствующи оформлен)
    function changeSocialIcon(elem,old_src,new_src,new_class) {
        var el = $(elem);
        $(el).mouseover(function(){
            el.children()[0].src=new_src;
            el.addClass(new_class);
        });
        $(el).mouseout(function(){
            el.children()[0].src=old_src;
            el.removeClass(new_class); 
        });
    }
    changeSocialIcon('#social_vk','img/Footer/social_vk_white.png','img/Footer/social_vk_white.png','social_vk-active');
    changeSocialIcon('#social_facebook','img/Footer/social_facebook_white.png','img/Footer/social_facebook_white.png','social_facebook-active');
    changeSocialIcon('#social_twitter','img/Footer/social_twitter_white.png','img/Footer/social_twitter_white.png','social_twitter-active');


    /*===============Контакты===============*/
    var out = $("modal-overlay");
    $('#header_writetous').click(function(e){
        $('body').css('overflow', 'hidden');
        $('#modal-overlay').css({display:"block"});
        $('.modal-contentPurple').css({display:"block"});
        $('#modal-overlay').animate({
            opacity:'0.8'
        },500,function(){
            $('#modal-block').css({display:"block"});
            $('#modal-block').animate({
                top:"50%"/*,
                left:"50%",
                transform: "translate(-50%,-50%)"*/
            },500,function(){});
        });
        return false;
    });
    function removeContactBlock() { /* Функция для удаления блока контакты*/
        $('body').css("overflow", "auto");
        $('#modal-overlay').animate({
            opacity:"0"
        },500,function(){
            $('#modal-overlay').css({
                display:"none"
            });
            $('#modal-block').animate({
                top:"150%",
                display:"none"
            },500,function(){
                $('.modal-contentPurple').css({display:"none"});
            });        
        })
        
    }
    $('#modal-overlay').click(function(){
        removeContactBlock();
    }); /* При нажатии вне окна закрывает блок контакты*/
    $('#modal-close').click(function(){
        removeContactBlock();
    }); /* В окне кнопка 'X' которая закрывает контакты*/

});
