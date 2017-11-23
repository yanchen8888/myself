/**
 * Created by mac on 2017/7/25.
 */
$(function (){
    //点击导航实现滚屏效果
   $('.navbar-nav a,.toAbout').click(function (){//给导航绑定点击事件
       $('body,html').animate({//给body和html添加动画效果
           scrollTop  : $(this.hash).offset().top
       },500);
       return false
   })
    //导航条绑定activate.bs.scrollspy
    $('.navbar').on('activate.bs.scrollspy',function () {
        //如果第一个li有active这个类名
        if($('.navbar-nav li').eq(0).hasClass('active') ){
            //导航条的背景色设置成无
            $(this).css({
                background : 'none'
            })
        }
        //否则导航条背景色设置成。。
        else(
            $(this).css({
                background : 'rgba(0,0,0,.3)'
            })
        )
    })
});