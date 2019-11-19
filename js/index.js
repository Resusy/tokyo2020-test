//search
$('.header-t-in .search').click(function () {
    $('.search-input-box').removeClass('hidden');
});
$('.search-input-box .close').click(function () {
    $('.search-input-box').addClass('hidden')
});


//header-nav
(function () {
    $('.nav-li').mouseenter(function () {
        $(this).children('.parent').addClass('current').siblings('.menu').removeClass('hidden');
    });
    $('.nav-li').mouseleave(function () {
        $(this).children('.parent').removeClass('current').siblings('.menu').addClass('hidden');
    });
})();

//carousel
(function () {
    //play函数
    function play(index) {
        $('.carousel .carousel-bar').stop().animate({
            marginLeft: index * 275
        });
        $('.carousel .pic-item').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    }

    //autoplay函数
    function autoplay() {
        timer = setInterval(function () {
            num++;
            if (num > len) {
                num = 0;
            }
            play(num);
        }, 2000);

    }

    let num = 0;
    let len = $('.carousel .pic-item').length - 1;
    let timer = null;
    let uClick = false;

    $('.carousel-pic').hover(function () {
        clearInterval(timer);
    }, function () {
        if(!uClick){
            autoplay();
        }
        //autoplay();

    });

    //左按钮
    $('.carousel-btn .btn-l').click(function () {
        clearInterval(timer);
        num--;
        if (num < 0) {
            num = len;
        }
        play(num);
        console.log(uClick);
    });
    //右按钮
    $('.carousel-btn .btn-r').click(function () {
        clearInterval(timer);
        num++;
        if (num > len) {
            num = 0;
        }
        play(num);
        console.log(uClick);
    });
    //暂停按钮
    $('.carousel-btn .btn-m').click(function () {
        if (uClick === false) {
            clearInterval(timer);
            $(this).css({
                backgroundPosition: '-80px -134px'
            });
            uClick = true;

        } else {
            autoplay();
            $(this).css({
                backgroundPosition: '-118px -46px'
            });
            uClick = false;
        }
    });
    //调用autoplay
    autoplay();

})();

//countdown
(function () {
    function countdown() {
        let endTime = new Date('2020-07-24 19:00:00').getTime();
        let nowTime = new Date().getTime();
        let timediff = Math.round((endTime - nowTime)/ 1000);
        let day = Math.floor(timediff/3600/24);
        let hour = Math.floor(timediff/3600%24);
        let minute = Math.floor(timediff/60%60);
        let second = timediff%60;
        //console.log(day,hour,minute, second);
        $('.time1 .days .cd-values').text(day);
        $('.time1 .hours .cd-values').text(hour);
        $('.time1 .minutes .cd-values').text(minute);
        $('.time1 .seconds .cd-values').text(second);

        //console.log('ok');
    }

    function countdown1() {
        let endTime = new Date('2020-08-25 19:00:00').getTime();
        let nowTime = new Date().getTime();
        let timediff = Math.floor((endTime - nowTime)/ 1000);
        let day = Math.floor(timediff/3600/24);
        let hour = Math.floor(timediff/3600%24);
        let minute = Math.floor(timediff/60%60);
        let second = timediff%60;
        //console.log(day,hour,minute, second);
        $('.time2 .days .cd-values').text(day);
        $('.time2 .hours .cd-values').text(hour);
        $('.time2 .minutes .cd-values').text(minute);
        $('.time2 .seconds .cd-values').text(second);

        //console.log('ok');
    }

    setInterval(countdown, 1000);
    setInterval(countdown1, 1000);

})();

//tab

(function () {
   $('.s-1-tab-bar .s-1-item') .click(function() {
       $(this).addClass('current').siblings().removeClass('current');
       let idx = $(this).index();
       $('.s-1-tab-content .one').eq(idx).addClass('current').siblings().removeClass('current');
   })

})();


//scroll
$('.supporters-bottom .bottom').click(function () {
    $('html, body').animate({
        scrollTop: 0
    });
});

