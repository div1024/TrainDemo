// JavaScript Document
$(function(){
	
	// 展开二维码盒子
    $(".guanzhu .weibo").hover(function(event) {
       $(this).children('div').show()
    },function(){
        $(this).children('div').hide()
    })

	 $(".guanzhu .weixin").hover(function(event) {
       $(this).children('div').show()
    },function(){
        $(this).children('div').hide()
    })



// 下拉菜单事件

    $(".nav-out li").eq(1).mouseenter(function(event) {
        $(".xiala").children('.sub-memu').stop().slideDown(500).siblings('.sub-memu1').hide()  
    });

    $(".xiala").mouseleave(function(event) {
       $(this).children('.sub-memu').stop().slideUp(500)
    });
    
// 下拉菜单事件

    $(".nav-out li").eq(2).mouseenter(function(event) {
        $(".xiala").children('.sub-memu1').stop().slideDown(500).siblings('.sub-memu').hide() 
    });

    $(".xiala").mouseleave(function(event) {
       $(".xiala").children('.sub-memu1').stop().slideUp(500)
    });

    // banner点击事件
     var myIndex=0;
    $(".banner ol li").click(function(event) {
        var index = $(this).index();
        myIndex++;
        $(this).addClass('current').siblings().removeClass('current')
        $(".banner ul li").eq(index).css({zIndex:myIndex}).stop().hide().fadeIn(500)
        num=index;
 

    });
    
// 导航轮播图事件
    var num=0;
    var timer=null;
   
    function func(){
        num++;
        myIndex++;
        if(num>3){num=0;}
        $(".banner ol li").eq(num).addClass('current').siblings().removeClass("current")
        $(".banner li").eq(num).css({zIndex:myIndex}).stop().hide().fadeIn(800)

    }
    timer=setInterval(func,3000)

// 鼠标移上停止动画
$(".banner").hover(function() {
   clearInterval(timer)
}, function() {
    clearInterval(timer)
    timer=setInterval(func,3000)
});


// 鼠标移上图片的特效
    $(".section .touming").fadeTo(0,0)
    $(".section li").hover(function(event) {
       
        $(this).children('p').css({left:-500}).stop().animate({left:0}, 300)
        $(this).children('.touming').stop().fadeTo(500,0.5)
    },function(){
        $(this).children('p').stop().animate({left:500}, 300)
        $(this).children('.touming').stop().fadeTo(500,0)
    });




// 产品展示专区
    $(".pro li ").hover(function(event) {
        $(this).children('span').stop().animate({bottom:0},300).siblings('a').stop().animate({top:-289}, 300)
    },function(){
         $(this).children('span').stop().animate({bottom:-289}, 300).siblings('a').stop().animate({top:0},300)
    });







	})//最后的，勿删