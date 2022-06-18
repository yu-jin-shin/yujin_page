$(function(){
  $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: false,
        arrows:false,
        autoplay : true,
        autoplaySpeed : 2000,
      });
      $(".center").slick({
        dots: false,
        arrows:false,
        infinite: true,
        centerMode: true,   
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay : true,
        autoplaySpeed : 1800,

        responsive: [                   
          {  breakpoint: 1100,    
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1
                 }
            }, {  breakpoint: 760,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                 }
            }
    ]  //반응형 포인트 지정
      });
      
      //팝업버튼
      $(function(){
        var a = 1 
        $('.btn_all').click(function(){
           // $(this).toggleClass('on');
          if(a==1) {
               $(this).addClass('on');   
               $('.box').fadeIn();
               a=0; 
          }else{
              $(this).removeClass('on');
              $('.box').fadeOut();
              a=1; 
          }
        })
    })


 })