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
    $(window).on('scroll',function() {
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

    // 簡略內容
    $('.class_text p').each(function() {
        let text = $(this).text();
        if (text.length > 40) {
            $(this).text(text.substring(0, 40) + '...');
        }
    });

    // 分頁內容
    const $container = $('.project_container');
    const $items = $container.find('.project_items');
    const itemsPerPage = 9;
    let currentPage = 1;
    function showPage(page) {
        $items.hide();
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        $items.slice(start, end).show();

        updatePagination();
    }
    function updatePagination() {
        const totalItems = $items.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        $('.page_numbers').empty();
        for (let i = 1; i <= totalPages; i++) {
            const $pageBtn = $('<button>').addClass('page_btn').text(i);
            if (i === currentPage) {
                $pageBtn.addClass('active');
            }
            $('.page_numbers').append($pageBtn);
        }

        $('.prev_page').prop('disabled', currentPage === 1);
        $('.next_page').prop('disabled', currentPage === totalPages);
    }
    $('.prev_page').on('click',function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
    $('.next_page').on('click',function() {
        const totalItems = $items.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });
    $(document).on('click', '.page_btn', function() {
        currentPage = parseInt($(this).text());
        showPage(currentPage);
    });

    showPage(1); // 顯示第一頁

    // 往上滑
    $('.scrollUp').on('click',function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });

    // 過濾器
    const $filterItems = $('.title_class li');
    const $projectItems = $('.project_items');

    $filterItems.on('click',function() {
        const selectedClass = $(this).attr('class');
        if (selectedClass === 'all_class') {
            // 顯示all
            $projectItems.show();
        } else {
            // 隱藏
            $projectItems.hide();
            // 顯示屬於該類別的項目
            $('.' + selectedClass).show();
        }
    });
});