$(function(){
        // ..........出现 隐藏....................
        $('.appends').hover(function(){
        $(this).find('.serover').show();
    },function(){
        $(this).find('.serover').hide();
     });
        //....................中部一一对应...........
var color=['#FFDDDE','#F3390A','#DFD8D0','#FFA800','gainsboro','#E4274F','#1C2C46','#C662FF','#FFC5D4','#F6F6F6','#30C4FF','#CF6E5D','#05548F','#FED4E0','#B4B4B4'];

$('.filer').each(function(i){
    $(this).data('index',i)
});
$('.filer').hover(function(){
    $(this).css({background:'#c40000',
        paddingLeft:'10px'
});
     clearInterval(timerId);
    $('.bannerxiao').hide();
    $(this).find('.bannerxiao').show(); 
    var i=$(this).data('index');
   
    clearInterval(timerId);
    $('.pannel-banner').css('background',color[i] );
    $('.uipage').hide();
    $('.exclo').hide();
},function(){
    clearInterval(timerId);
    $('.bannerxiao').hide();
     $(this).find('.bannerxiao').show();
      $(this).css({background:'',
         paddingLeft:'0'
  }); 
});
$('.filers').hover(function(){
     clearInterval(timerId);
     $('.bannerxiao').hide();
     $('.uipage').show();
    $('.exclo').show();
    $('.pannel-banner').css('background',colors[index-1] );
    timerId=setInterval(lunbo,1000);
});
        // ............轮波...............
     var colors=['#0166FF','#FFA800','#DF1E4D','#DBDBDB'];
     var index=0;
     var lunbo=function(){
        $('.picture').hide();
        var el=$('.picture')[index];
        $(el).show();
        $('.pannel-banner').css('background',colors[index]);

        $('.ui-page-item').removeClass('red');
        $( $('.ui-page-item')[index]).addClass('red');
        index+=1;
        if(index===$('.picture').length){
            index=0;
        }
     }
     $('.ui-page-item').each(function(i){
        $(this).data('index',i);
     });
     $('.ui-page-item').hover(function(){
        clearInterval(timerId);
        $('.ui-page-item').removeClass('red');
        $(this).addClass('red');
        var i=$(this).data('index');
        $('.picture').hide();
        $($('.picture')[i]).show();

        $('.pannel-banner').css('background',colors[i]);
        index=i;
     },function(){
        clearInterval(timerId);
        timerId=setInterval(lunbo,1000);
     });
     var timerId=setInterval(lunbo,1000);

     $('.picture').each(function(i){
        $(this).data('index',i);
     });
     $('.picture').hover(function(){
        clearInterval(timerId);

     },function(){
         timerId=setInterval(lunbo,1000);
     });

     //...........................................
     $('.filers').hover(function(){
        $('.filers').css({
            background:'#c40000',
            paddingLeft:'10px'
        });

     },function(){
        $('.filers').css({
            background:'',
            paddingLeft:'0'
        });
     });
     //................窗口.......................

     $('.ff').each(function(i){
        $(this).data('index',i);
     });
     $('.ff').click(function(){
        var i=$(this).data('index');
        var newtop=$ ( $ ( '.tmall' )[i]).offset().top-200;
        $( {top: $(window).scrollTop()}).animate(
        {top: newtop },
        {
         duration: 800,
        step: function() {
            $(window).scrollTop(this.top);
            }
        }
        );

     });
     var kaiguan=true;
     $('.ff').hover(function(){
        $(this).css({background:'#c40000',color:'white'});
        $(this).find('.qunzi-h').hide();
        $(this).find('.ziti').show();
        kaiguan=false;
        // clearInterval(timeId);

     },function(){
         $(this).css({background:'',color:''});
        $(this).find('.qunzi-h').show();
        $(this).find('.ziti').hide();
        kaiguan=false;
     });
     // ................楼层对应......................
     var arr=[];
     $('.tmall').each(function(i){
        var s=$($('.tmall')[i]).offset().top;
        console.log(i,s);
        arr.push(s);
     });
     $(window).scroll(function(){
        if($(window).scrollTop()>1000){
            $('.tubiao-h').show();
        }else{
            $('.tubiao-h').hide();
        }
        for(var i=0;i<arr.length;i++){
            if($(window).scrollTop()>(arr[i]-150) && $(window).scrollTop()<(arr[i+1]-200)){
                $( $('.ff')[i] ).find('.qunzi-h').hide();
                $( $('.ff')[i]).css({background:'#c40000',color:'white'});
                $($('.ff')[i]).find('.ziti').show();
               

            }else{
                $( $('.ff')[i] ).find('.qunzi-h').show();
                $( $('.ff')[i] ).css({background:'',color:''});
                $($('.ff')[i]).find('.ziti').hide();
               

            }
        }

     });

     
     
     //............................................
     $('.guang').hover(function(){
        $(this).css({position:'relative'});
        $(this).stop();
        $(this).animate({left:-10},200);
     },function(){
        $(this).stop();
        $(this).animate({left:0},200);
     });

     $('.beautif').hover(function(){
        $(this).css({position:'relative'});
        $(this).stop();
        $(this).animate({left:-3},200);
     },function(){
        $(this).stop();
        $(this).animate({left:0},200);
     });
     $('.smile').hover(function(){
        $(this).css({position:'relative'});
        $(this).stop();
        $(this).animate({left:-3},200);
     },function(){
        $(this).stop();
        $(this).animate({left:0},200);
     });
     //............回到顶部.....................

     $('#tequanfor').click(function(){
        $( { top: $(window).scrollTop()}).animate(
        { top:0},
        {
            duration:1000,
            step:function(){
                $(window).scrollTop(this.top);
            }
        }
        );
     });

     //..............显示 隐藏............
     var topp;
     $(window).scroll(function(){
        if($(window).scrollTop()>300){
            clearTimeout(topp);
            topp=setInterval(function(){
                $('#daohang').show();
            },1000);
        }else{
            clearTimeout(topp);
            $('#daohang').hide();
        }
     });
     //......................................
     $('.iconfont').hover(function(){
        $(this).find('.tequan').fadeIn('slow');
     },function(){
        $(this).find('.tequan').fadeOut('slow');

     }
     );
     //....................................
     // $('.tequan-p').hover(function(){
     //    $('.tequan-p').css({
     //        background:"#c40000"
     //    },function(){
     //         $('.tequan-p').css({background:"black"});
     //         $('.tequan-p').hide();
           
     //    });
     // });


     // $({aa:10}).animate(
     //    {aa:1000},
     //    {
     //        duration:900,
     //        step:function(){
     //            // console.log(this.aa);
     //        }
     //    }
     //    )

     $('.ecplo').hover(function(){
        $({aa:1}).animate({aa:20},
        {
            duration:1000,
            step:function(){
                $('.ecplo').css({marginRight:this.aa});
            }
        });
     });


//.................小轮波.........................
var counts=0;
$('.leftj').click(function(e){
    e.stopPropagation();
    clearInterval(timeId);
    $('.milld-one').stop();
    $('.milld-one').hide();
    counts--;    
    if(counts==-1){
        counts=2;
    };
    $($('.milld-one')[counts]).show();
});
$('.leftj').hover(function(){
},function(){
    timeId=setInterval(smile,1000);
});
$('.rightj').hover(function(){
},function(){
    timeId=setInterval(smile,1000);
});

$('.rightj').click(function(e){
    e.preventDefault();
    clearInterval(timeId);
    $('.milld-one').stop();
    $('.milld-one').hide();
    counts++;
    if(counts==3){
        counts=0;
    };
   $($('.milld-one')[counts]).show();
});
var smile=function(){
    $('.milld-one').hide();
    var els= $('.milld-one')[count];
    $(els).show();
    count+=1;
    if(count===$('.milld-one').length){
        count=0;
    }
 }
 var timeId=setInterval(smile,1000);
//..............2.......................
var count=0;
$('.lefth').click(function(e){
    e.preventDefault();
    clearInterval(timecot);
    $('.milld-two').stop();
    $('.milld-two').hide();
    count--;    
    if(count==-1){
        count=2;
    };
    $($('.milld-two')[count]).show();
});
$('.lefth').hover(function(){   
},function(){
    timecot=setInterval(smiles,1000);
});
$('.righth').hover(function(){   
},function(){
    timecot=setInterval(smiles,1000);
});
$('.righth').click(function(e){
    e.preventDefault();
    clearInterval(timecot);
    $('.milld-two').stop();
    $('.milld-two').hide();
    count++;
    if(count==3){
        count=0;
    };
   $($('.milld-two')[count]).show();
});
var smiles=function(){
    $('.milld-two').hide();
    var els= $('.milld-two')[count];
    $(els).show();
    count+=1;
    if(count===$('.milld-two').length){
        count=0;
    }
};
var timecot=setInterval(smiles,1000);
//..................3.........................
var jishus=0;
$('.leftk').click(function(e){
    e.preventDefault();
    clearInterval(timeIds);
    $('.milld-three').stop();
    $('.milld-three').hide();
    jishus--;    
    if( jishus==-1){
         jishus=2;
    };
    $($('.milld-three')[ jishus]).show();
});
$('.leftk').hover(function(){    
},function(){
    timeIds=setInterval(smilo,1000);
});
$('.rightk').hover(function(){    
},function(){
    timeIds=setInterval(smilo,1000);
});
$('.rightk').click(function(){
    clearInterval(timeIds);
    $('.milld-three').stop();
    $('.milld-three').hide();
     jishus++;
    if( jishus==3){
         jishus=0;
    };
   $($('.milld-three')[ jishus]).show();
});
var jishu=0
var smilo=function(){
    $('.milld-three').hide();
    var els= $('.milld-three')[jishu];
    $(els).show();
    jishu+=1;
    if(jishu===$('.milld-three').length){
        jishu=0;
    }
};
var timeIds=setInterval(smilo,1000);
// ...............4.....................
var jishu=0;
$('.leftp').click(function(e){
    e.preventDefault();
    clearInterval(timeIdmon);
    $('.milld-four').stop();
    $('.milld-four').hide();
    jishu--;    
    if( jishu==-1){
         jishu=2;
    };
    $($('.milld-four')[ jishu]).show();
});
$('.leftp').hover(function(){
},function(){
    timeIdmon=setInterval(smilmon,1000);
});
$('.rightp').hover(function(){
},function(){
    timeIdmon=setInterval(smilmon,1000);
});
$('.rightp').click(function(e){
    e.preventDefault();
    clearInterval(timeIdmon);
    $('.milld-four').stop();
    $('.milld-four').hide();
     jishu++;
    if( jishu==3){
         jishu=0;
    };
   $($('.milld-four')[ jishu]).show();
});
var smilmon=function(){
    $('.milld-four').hide();
    var els= $('.milld-four')[jishu];
    $(els).show();
    jishu+=1;
    if(jishu===$('.milld-four').length){
        jishu=0;
    }
};
var timeIdmon=setInterval(smilmon,1000);
// ...................5.....................
var jisuans=0;
$('.leftq').click(function(e){
    e.preventDefault();
    clearInterval(timeIdnone);
    $('.milld-five').hide();
    jisuans--;    
    if( jisuans==-1){
         jisuans=2;
    };
    $($('.milld-five')[jisuans]).show();
});
$('.leftq').hover(function(){
},function(){
    timeIdnone=setInterval(smilnone,1000);
});
$('.rightq').hover(function(){
},function(){
    timeIdnone=setInterval(smilnone,1000);
});

$('.rightq').click(function(e){
    e.preventDefault();
    clearInterval(timeIdnone);
    $('.milld-five').stop();
    $('.milld-five').hide();
     jisuans++;
    if( jisuans==3){
         jisuans=0;
    };
   $($('.milld-five')[jisuans]).show();
});
var smilnone=function(){
    $('.milld-five').hide();
    var els= $('.milld-five')[jisuans];
    $(els).show();
    jisuans+=1;
    if(jisuans===$('.milld-five').length){
        jisuans=0;
    }
};
var timeIdnone=setInterval(smilnone,1000);
//..............出现隐藏心....................
$('.moll-r').hover(function(){
    $(this).find('.xinxing').show();
},function(){
    $(this).find('.xinxing').hide();
})
//.............选项卡..................
$('.dapai').each(function(i){
    $(this).data('index',i);
});
$('.dapai').click(function(){
    var i=$(this).data('index');
    $('.maring').hide();
    $($('.maring')[i]).show();

    $('.dapai').css({borderBottom:''});

    $(this).css({borderBottom:'2px solid black'});
});

var cishu=0;
$('.huanyi-h').click(function(){
     cishu++;
    $('.maring').hide();
    $($('.maring')[cishu]).show();
    if(cishu==$('.maring').length-1){
        cishu=0;
    }


});




    
    







}); 
//代码中不要使用table和空格混排
     // $('#id');
     // $($('.aa')[0]);
     // var aa=$('<span>1</span>');
     // console.dir(aa);
     // $(function(){})
     // var $=function(){
     //    if(typeof arg=='function'){
     //        window.onload=arg;
     //    }
     // }









