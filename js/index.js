$(function(){
    $("#fullpage").fullpage({
        anchors: ['one','two','three','four','five','six','seven','eight','nine','ten'],
        menu:"#menu",
        navigation:true,
        navigationTooltips: ['首页','视觉','交互','皮肤','功能','邮件','科技','联系','关于我们','马上体验'],
        // showActiveTooltip:true,//显示当前页的提示
        afterLoad:function(anchorLink,index){
            var index = index-1;
            $(".section").eq(index).find(".b").css({
                animation:"bottoms 1s ease forwards"
            });
            $(".section").eq(index).find(".s").css({
                animation:"title 1s ease forwards"
            });
            $(".section").eq(index).find(".o").css({
                animation:"centers 2s ease 1s forwards"
            });
            $(".section").eq(index).find(".t").css({
                animation:"tops 1s ease forwards"
            });
            $(".section").eq(index).find(".l").css({
                animation:"lefts 1s ease forwards"
            });
            $(".section").eq(index).find(".r").css({
                animation:"rights 1s ease forwards"
            });
            if(index == 7){
                $(".section").eq(7).find(".flight").css({
                    animation:"flight 1s ease forwards"
                })
            }
            if(index == 9){
                $(".section").eq(9).find(".a").css({
                    animation:"a 1s ease forwards"
                })
            }
        },
        onLeave:function(index,next,dir){
            var index = index-1;
            $(".section").eq(index).find(".b").css({
                animation:"bottoms1 1s ease forwards"
            });
            $(".section").eq(index).find(".s").css({
                animation:"title1 1s ease forwards"
            });
            $(".section").eq(index).find(".o").css({
                animation:"centers1 2s ease 1s forwards"
            });
            $(".section").eq(index).find(".t").css({
                animation:"tops1 1s ease forwards"
            });
            $(".section").eq(index).find(".l").css({
                animation:"lefts1 1s ease forwards"
            });
            $(".section").eq(index).find(".r").css({
                animation:"rights1 1s ease forwards"
            });
            if(index == 7){
                $(".section").eq(7).find(".flight").css({
                    animation:"flight1 1s ease forwards"
                })
            }
            if(index == 9){
                $(".section").eq(9).find(".a").css({
                    animation:"a1 1s ease forwards"
                })
            }
        }

    });
});