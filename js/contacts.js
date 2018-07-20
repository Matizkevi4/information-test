$(document).ready(function() { 
    // Placeholder для написать нам
    // Функция описана в файле ChangePlaceholder.js
    changePlaceholder('.write-to-us_inp_FS_name','Имя и фамилия');
    changePlaceholder('.write-to-us_inp_email','Email');
    changePlaceholder('.write-to-us_textMessage','Текст сообщения');
    // changeSocialIcon изменение соц. кнопок при наведении
    // Функция описана в файле ChangeSocialIcon.js
    changeSocialIcon('#contacts_social_vk', 'img/social_icon/social_vk_grey.png', 'img/social_icon/social_vk_white.png', 'social_vk-active');
    changeSocialIcon('#contacts_social_facebook', 'img/social_icon/social_facebook_grey.png', 'img/social_icon/social_facebook_white.png', 'social_facebook-active');
    changeSocialIcon('#contacts_social_twitter', 'img/social_icon/social_twitter_grey.png', 'img/social_icon/social_twitter_white.png', 'social_twitter-active');
});