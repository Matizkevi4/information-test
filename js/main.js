$(document).ready(function() {
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
    var slideNow = 0; // Текущий слайд
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
    slider('.gallery_navigator_item');

    $('.material-block_image').each(function(index,elem) {
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
        $(elem).css({
            'color':'#3c3c3c',
            'font':'bold 1em OpenSans'
        });
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
    changeSocialIcon('#social_vk','img/Footer/social_vk_grey.png','img/Footer/social_vk_white.png','social_vk-active');
    changeSocialIcon('#social_facebook','img/Footer/social_facebook_grey.png','img/Footer/social_facebook_white.png','social_facebook-active');
    changeSocialIcon('#social_twitter','img/Footer/social_twitter_grey.png','img/Footer/social_twitter_white.png','social_twitter-active');
});