/**
 * Created by Administrator on 2016/10/12.
 */
$(document).ready(function () {
    $('.q>img').hover(function () {
        $(this).css({'top':'-90px','transition':'all 1s ease'})
    },function () {
        $(this).css({'top':'-40px','transition':'all 1s ease'})
    })

    $('.w>img').hover(function () {
        $(this).css({'bottom':'-70px','transition':'all 1s ease'})
    },function () {
        $(this).css({'bottom':'-120px','transition':'all 1s ease'})
    })

    $('.e>img').hover(function () {
        $(this).css({'top':'-90px','transition':'all 1s ease'})
    },function () {
        $(this).css({'top':'-40px','transition':'all 1s ease'})
    })

    $('.r>img').hover(function () {
        $(this).css({'bottom':'-60px','transition':'all 1s ease'})
    },function () {
        $(this).css({'bottom':'-110px','transition':'all 1s ease'})
    })
})