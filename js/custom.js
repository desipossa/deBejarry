$(function () {

    $('.wrap').fullpage({
        // css3: false,
        navigation: true,
        afterLoad: function (a, idx) {
            console.log(a, idx);
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');
        }
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })

})