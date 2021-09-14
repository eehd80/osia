$(document).ready(function(){
  
  // header sticky
  $('#header').each(function(){

    let $this = $(this)          

    // ham menu
    $this.find('.link-ham').click(function(){
      $('#header').addClass('active')
    })
    $this.find('.link-close').click(function(){
      $('#header').removeClass('active')
    })
})  

$('.topnav').each(function(){
  
  let $this = $(this)

  $this.find('.nav-depth1 > li > a').click(function(){

    let $navDep2Now = $(this).next('.nav-depth2'),
          $navDep2 = $('.nav-depth2')

    if($navDep2Now.is(':hidden')){
      $navDep2.slideUp()
      $navDep2Now.slideDown()
    }else if( $navDep2Now.is(':visible') ){
      $navDep2Now.slideUp()
    }else{
      $navDep2Now.slideDown()
    }

  })
})

//gnb
var $navDepth1 = $('#gnb'),
      $header = $('#header'),
      $window = $(window);

//초기화
$navDepth1
.removeClass('active')
.on('focusin mouseenter',function(){
  $(this).addClass('active')
})
.on('focusout mouseleave',function(){
  $(this).removeClass('active')
})

// header sticky
$('#header').each(function(){

  let $this = $(this)          

  // 윈도우가 스크롤 됐을 때
  $window
  .scroll(function(){

    let $wrap= $('.wrap')

    if( $window.scrollTop() > 40 ){
      $wrap.addClass('sticky')
    }else{
      $wrap.removeClass('sticky')
    }
  })
  .trigger('scroll')

})


  // swiper-intro
  var swiper = new Swiper(".slide-intro", {
    // effect: "fade",
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // slide-occa-v
  var swiper = new Swiper(".slide-occa-v", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // slide-family
  var swiper = new Swiper(".foot-family", {
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  // tab 
  $('.tab').each(function(){
    $(this).find('.sec-tit').click(function(event){
      event.preventDefault()
      $('.tab .sec-').removeClass('on')
      $(this).parent().addClass('on')
    })
  })

  let $tabContHeight = $('.tab .sec-cont').outerHeight()
  $('.tab').css({
    height : $tabContHeight + 50
  })

});