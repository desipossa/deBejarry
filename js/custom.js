$(function () {

    $('.wrap').fullpage({
        // css3: false,
        anchors: ['intro'],
        navigation: true,
        afterLoad: function (a, idx) {
            console.log(a, idx);
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');
        }
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $('.header .gnb>ul ul').stop().slideUp();
        $(this).next().stop().slideToggle();
    })

})