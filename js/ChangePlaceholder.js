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