$(function () {
    $('.main-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'       
    });

    
    $(document).ready(function(){
	if (window.matchMedia('(max-width: 999px)').matches) {

			//767pxまでの画面サイズの時の処理	
            $('.sp-news-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            });
	}
});


    $(".burger").click(function () {
        $(".burger").toggleClass("is-active");
        $(".spmenu").toggleClass("is-active");
        $("body").toggleClass("is-active");
    });
    $('.spmenu a').on('click', function () {
        $('.spmenu').removeClass('is-active');
        $('.burger').removeClass('is-active');
        $('body').removeClass('is-active');
    });
});
$(function () {
    var headerHight = 100;
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 550, "swing");
      return false;
    });
  });