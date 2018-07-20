    // changeSocialIcon принимает 3 параметра:
    // 1. id ссылки
    // 2. путь к исходному изображению
    // 3. путь к изображению на которое будет заменяться исходное
    // 4. добавляемый класс (в css должен быть соответствующи оформлен)
    function changeSocialIcon(elem,old_src,new_src,new_class) {
        var el = $(elem);
        $(el).mouseover(function() {
            if(new_src!='') {
                el.children()[0].src=new_src;
            }
            if(new_class != undefined) {
                el.addClass(new_class);
            }
        });
        $(el).mouseout(function() {
            if(new_src!='') {
                el.children()[0].src=old_src;
            }
            if(new_class != undefined) {
                el.removeClass(new_class); 
            }
        });
    }