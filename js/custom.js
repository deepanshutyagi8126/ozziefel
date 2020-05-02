$(document).ready(function(){
    $(document).on('click','.ozCust li.datePick.datePick1 a',function(){
        $('.fillterInner.fillterInner1').slideToggle();
    });
});


document.addEventListener("mousedown",function(event){
    if(event.target.closest(".ozCust li.datePick.datePick1 a ,.fillterInner.fillterInner1"))
       return;
    $('.fillterInner.fillterInner1').slideUp();
});

$(document).ready(function(){
    $(document).on('click','.ozCust li.datePick.datePick2 a',function(){
        $('.fillterInner.fillterInner2').slideToggle();
    });
});


document.addEventListener("mousedown",function(event){
    if(event.target.closest(".ozCust li.datePick.datePick2 a ,.fillterInner.fillterInner2"))
       return;
    $('.fillterInner.fillterInner2').slideUp();
});

$(document).ready(function(){
    $(document).on('click','.ozCust li.datePick.datePick3 a',function(){
        $('.fillterInner.fillterInner3').slideToggle();
    });
});


document.addEventListener("mousedown",function(event){
    if(event.target.closest(".ozCust li.datePick.datePick3 a ,.fillterInner.fillterInner3"))
       return;
    $('.fillterInner.fillterInner3').slideUp();
});

$(document).ready(function(){
    $(document).on('click','.ozCust li.datePick.datePick4 a',function(){
        $('.fillterInner.fillterInner4').slideToggle();
    });
});


document.addEventListener("mousedown",function(event){
    if(event.target.closest(".ozCust li.datePick.datePick4 a ,.fillterInner.fillterInner4"))
       return;
    $('.fillterInner.fillterInner4').slideUp();
});





    $(document).on('click','.dotPlus a.dotlef' , function(){
        $('.dotClickTab').slideToggle();
    });

    $(document).on('click','a.historyBtn.historyBtn1' , function(){
        $('.hisShow.hisShow1').toggle();
    });

    $(document).on('click','a.historyBtn.historyBtn2' , function(){
        $('.hisShow.hisShow2').toggle();
    });


$(document).on('click' ,'.navIconup a',function(){
    $(".sideRight").animate('width','200px');
});
$(document).on('click','.historyBtn.historyBtn1' ,function(){
    $('.historyBtn.historyBtn1').addClass('carUp');
    $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
});
$(document).on('click','.carUp' ,function(){
    $('.carUp').removeClass('carUp');
    $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
});
$(document).on('click','.historyBtn.historyBtn2' ,function(){
    $('.historyBtn.historyBtn2').addClass('carUp2');
    $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
});
$(document).on('click','.carUp2' ,function(){
    $('.carUp2').removeClass('carUp2');
    $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
});

$(document).on('click','.dotRight ul li a' ,function(){
    $('.dotRight ul li a').addClass('carUp2');
    $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
});
$(document).on('click','.carUp2' ,function(){
    $('.carUp2').removeClass('carUp2');
    $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
});

$(document).on('click','a.moneyIn' ,function(){
    $('a.moneyIn').addClass('carUp2');
    $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
});
$(document).on('click','.carUp2' ,function(){
    $('.carUp2').removeClass('carUp2');
    $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
});


$(document).on('click','.navIconup .humb',function(){
   $(".navIconup .humb").addClass("openAll"); 
    $(".navIconup").animate({right : '0'});
});
$(document).on('click','.openAll',function(){
   $(".navIconup .humb").removeClass("openAll"); 
    $(".navIconup").animate({right : '-300px'});
});

