var wdth = $(window).width();

$(function(){
    $('body').waitForImages({
        waitForAll: true,
        finished: function() {
            $('#loading').fadeOut(1000); 
        },
    });
    $('.hamburger').on('click',function() {
        $(this).toggleClass('active');
        $('.nav_menu').toggleClass('active');
    });

    // 點擊選單項目時關閉選單（手機版）
    $('.nav_menu li a').on('click',function() {
        $('.hamburger').removeClass('active');
        $('.nav_menu').removeClass('active');
    });

    // 點擊空白處關閉選單
    $(document).on('click',function(event) {
        if (!$(event.target).closest('.navbar').length) {
            $('.hamburger').removeClass('active');
            $('.nav_menu').removeClass('active');
        }
    });

    // 添加滑過效果
    $('.nav_menu li a').on('hover',
        function() {
            $(this).css('color', '#ddd');
        },
        function() {
            $(this).css('color', 'white');
        }
    );

    // 滾動時固定導航欄（選用）
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });


    $('.center_carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear',
    });
});