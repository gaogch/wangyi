$(function(){
    $("#fullpage").fullpage({
        anchors: ['one','two','three','four','five','six','seven','eight','nine','ten'],
        menu:"#menu",
        navigation:true,
        navigationTooltips: ['首页','视觉','交互','皮肤','功能','邮件','科技','联系','关于我们','马上体验'],
        // showActiveTooltip:true,//显示当前页的提示
        afterLoad:function(anchorLink,index){

        }
    });
})