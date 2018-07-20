$(document).ready(function() {
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

/*!!!!!!!!!!!!!!!!Код дублируется!!!!!!!!!!!!!!!!!!!!!!!!!*/
// Функия необходимая для изменения активного таба при нажатии students_tab и schools_tab (код дублируется)
// и показа содержимого (тем (см.html))
    $('.students_tab').click(function(){
        var active_content; // Необходимо для получения номера нажатого элемента
        for (var i = 0; i < $('.students_tab').length; i++) {
            if($($('.students_tab')[i]).hasClass('active_item')) { // Проверка на существует ли класс active_item (активный элемент)
                $($('.students_tab')[i]).removeClass('active_item'); // Удалить текущий класс
                active_content=$(this).index(); // Запомнить его номер
            }
            $($('.lessons_content_forstudents')[i]).removeClass('lessons_content_active'); // Удалить все классы актив у содержимого
        }
        $(this).addClass('active_item'); // Добавить элементу по которому нажали ЛКМ класс актив
        $($('.lessons_content_forstudents')[active_content]).addClass('lessons_content_active'); // Добавить класс актив для содержимого
    });
    $('.schools_tab').click(function(){
        var active_content;
        for (var i = 0; i < $('.schools_tab').length; i++) {
            if($($('.schools_tab')[i]).hasClass('active_item')) {
                $($('.schools_tab')[i]).removeClass('active_item');
                active_content=$(this).index();
            }
            $($('.lessons_content_forschools')[i]).removeClass('lessons_content_active');
        }
        $(this).addClass('active_item');
        $($('.lessons_content_forschools')[active_content]).addClass('lessons_content_active');
    });
});
/*!!!!!!!!!!!!!!!!Код дублируется!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*========================================================*/