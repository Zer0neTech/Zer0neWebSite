$(document).ready(function () {
    AOS.init();
    setTimeout(function () {
        $(".topBar").slideDown("slow");
    }, 500);

    $('.menuButton').click(function () {
        $('.menuOverlay').slideToggle(500);
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`            
            $(".menuOverlay").slideUp();
        }
    });

    $('#mnuService').mouseout(function () {
        //$('#pnlService').hide();
    });
    $('#mnuService').mouseenter(function () {
        $('#pnlService').show();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $('.topBar').addClass('topBar_scroll');
        } else { $('.topBar').removeClass('topBar_scroll', 300); }
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        autoplay: {
            delay: 3000,
        },
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });   


    var flipper = $("#card").flip({
        trigger: 'manual',
        axis: 'x'
    });
    $('#card .content').hide();
    $('.serviceBlock.mobileApp').click(function () {
        var content = $('.mobileAppContent').html();
        $('.back').html(content);
        $("#card").flip('toggle');
    })
    $('.serviceBlock.webApp').click(function () {
        var content = $('.webAppContent').html();
        $('.back').html(content);
        flipper.flip(true);
    })
    $('.serviceBlock.startup').click(function () {
        var content = $('.startUpContent').html();
        $('.back').html(content);
        flipper.flip(true);
    })
    $('.serviceBlock.consult').click(function () {
        var content = $('.consultContent').html();
        $('.back').html(content);
        flipper.flip(true);
    })
    $('#card .back').click(function () {
        $("#card").flip('toggle');
    })

    function detectmob() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    if (detectmob()) {
        $('.ServicesWeb').hide();
        $('.ServicesMob').show();
    }
    else {
        $('.ServicesWeb').show();
        $('.ServicesMob').hide();
    }
});