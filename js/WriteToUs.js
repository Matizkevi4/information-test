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
function removeContactBlock() { /* Функция для удаления блока написать нам*/
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
}); /* В окне кнопка 'X' которая закрывает контакы */