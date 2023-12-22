$(function () {
    $('.visual_slide_box').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });
    // $('.visual_right_wrap>ul li').on('click', function () {

    // })
    $('.visual_right_wrap .tab_tit li a').on('click', function (e) {
        //1. a를 클릭햇을떄 새로고침 되지않게 하기 = function에 (e)
        e.preventDefault();
        //2. 번호를 받아오기
        let idx = $(this).parent().index();
        //3. 번호에 부합하는 tab_con>li를 보여주기
        $('.visual_right_wrap .tab_con>div').removeClass('on');
        $('.visual_right_wrap .tab_con>div').eq(idx).addClass('on');
        //4. 메뉴에 스타일 붙이기
        $('.visual_right_wrap .tab_tit li').removeClass('on')
        $('.visual_right_wrap .tab_tit li').eq(idx).addClass('on')


    });

    $('.visual_right_wrap .public_box .tab_sub li a').on('click', function (e) {
        //1. a를 클릭햇을떄 새로고침 되지않게 하기 = function에 (e)
        e.preventDefault();
        //2. 번호를 받아오기
        let idx = $(this).parent().index();
        //3. 번호에 부합하는 tab_con>li를 보여주기
        $('.visual_right_wrap .tab_sub_con div').removeClass('on');
        $('.visual_right_wrap .tab_sub_con div').eq(idx).addClass('on');
        //4. 메뉴에 스타일 붙이기
        $('.visual_right_wrap .public_box .tab_sub li').removeClass('on')
        $('.visual_right_wrap .public_box .tab_sub li').eq(idx).addClass('on')
    });

    $('.car_right_slide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
    });

    $('.event_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });
})