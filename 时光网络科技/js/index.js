/**
 * Created by mac on 2017/7/25.
 */
$(function (){
    //�������ʵ�ֹ���Ч��
   $('.navbar-nav a,.toAbout').click(function (){//�������󶨵���¼�
       $('body,html').animate({//��body��html��Ӷ���Ч��
           scrollTop  : $(this.hash).offset().top
       },500);
       return false
   })
    //��������activate.bs.scrollspy
    $('.navbar').on('activate.bs.scrollspy',function () {
        //�����һ��li��active�������
        if($('.navbar-nav li').eq(0).hasClass('active') ){
            //�������ı���ɫ���ó���
            $(this).css({
                background : 'none'
            })
        }
        //���򵼺�������ɫ���óɡ���
        else(
            $(this).css({
                background : 'rgba(0,0,0,.3)'
            })
        )
    })
});