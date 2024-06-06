$(function () {
    // switch按鈕
    $(".menuBox").hide();
    $(".switchW3").click(function () {
        // x=true有被打勾，否則為 false
        var x = $("input[name='chkOpen']").is(":checked");
        if (x) {
            $(".menuBox").fadeIn(250);
        } else {
            $(".menuBox").fadeOut(250);
        }
    });

    // loading
    $(document).ready(function () {
        setTimeout(function () {
            $(".loadingwrapper").fadeOut(250);
        }, 2500);
    });

    // menu滑動到指定位置
    $(".menu a").click(function () {
        // 返回取得屬性與值
        let btn = $(this).attr("href");
        // 抓取相對的座標位置
        let pos = $(btn).offset();
        $("html, body").animate({ scrollTop: pos.top }, 600);
    });

    // 手機版menu滑動到指定位置
    $(".mb-menu a").click(function () {
        // 返回取得屬性與值
        let btn = $(this).attr("href");
        // 抓取相對的座標位置
        let pos = $(btn).offset();
        $("html, body").animate({ scrollTop: pos.top }, 600);
    });

    // logo滑動到指定位置
    $(".leftSlogan a").click(function () {
        // 返回取得屬性與值
        let btn = $(this).attr("href");
        // 抓取相對的座標位置
        let pos = $(btn).offset();
        $("html, body").animate({ scrollTop: pos.top }, 600);
    });

    // 到選單區域時MENU顯示active
    $(window).scroll(function () {
        // -------設定menu錨點-------
        let currentTopPos = $(this).scrollTop();
        let anchorMenu = $(".menu a");

        anchorMenu.each(function () {
            let linkSection = $(this).attr("href"); //取得錨點連結的屬性值
            let sectionTop = ($(linkSection).offset().top) - 120;  // 抓上面屬性值的座標中 Top 位置抓取比實際TOP高120像素的位置
            let sectionBottom = sectionTop + $(linkSection).outerHeight(); //偵測每一段的底部
            // 設定如果sectionTop&&sectionBottom之間就active
            if (currentTopPos >= sectionTop && currentTopPos <= sectionBottom) {
                $(anchorMenu).removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    });

    // 返回top的按鈕
    $("#gotop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    // FAQ問答box
    document.querySelectorAll(".accordion-header").forEach(button => {
        button.addEventListener("click", () => {
            const accordionContent = button.nextElementSibling;

            button.classList.toggle("active");

            if (button.classList.contains("active")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                accordionContent.style.borderRadius = "0 0 16px 16px";
            } else {
                accordionContent.style.maxHeight = 0;
            }

            // Close other open accordion items
            document.querySelectorAll(".accordion-header").forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove("active");
                    otherButton.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    });

    // 手機點擊甜甜圈位移
    $('.all-items a').on('touchstart', function () {
        $(this).find('.all-donut').css('top', '-24px');
    });

    // 麵包屑點擊
    $('.breadcrumb a').on('touchstart', function () {
        $(this).addClass('active');
    });
    $('.breadcrumb a').on('touchend', function () {
        $(this).removeClass('active');
    });

    // index手機點擊menu
    $('.mb-menu a').on('touchstart', function () {
        $(this).addClass('active');
    });
    $('.mb-menu a').on('touchend', function () {
        $(this).removeClass('active');
    });

    // menu點擊
    $('.menuBox a').on('touchstart', function () {
        $(this).addClass('active');
    });
    $('.menuBox a').on('touchend', function () {
        $(this).removeClass('active');
    });

    // AOS
    AOS.init();

    // slick slider
    $('.itemSlider').slick({
        infinite: true,     //是否要loop，預設為true
        speed: 400,
        slidesToShow: 3,    //一次顯示3個
        // RWD斷點
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    arrows: false,
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    vertical: true,
                    verticalSwiping: true,
                    swipeToSlide: true,
                    slidesToShow: 1
                }
            }
        ]
    });

});