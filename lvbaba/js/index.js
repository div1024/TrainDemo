/* 
* @Author: Marte
* @Date:   2015-11-12 19:44:09
* @Last Modified by:   Marte
* @Last Modified time: 2015-11-12 20:10:14
*/
$(function(){
    $(window).scroll(function(event) {
        
       $(".top p").click(function(event) {
             $("html,body").stop().animate({scrollTop:0},500)
    });
        }); 

// 切换度周末和长假
$(".sec-name li").click(function(event) {
    var index=$(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $(".sec-main ul").eq(index).css({display:"block"}).siblings().hide();

});











})