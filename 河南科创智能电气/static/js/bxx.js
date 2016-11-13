/**
 * Created by Administrator on 2016/10/8.
 */

$(document).ready(function () {
    //下拉菜单消失和显示
    $('.zx').hover(function () {
        $('#zz').removeClass('xiaoshi')
    },function () {
        $('#zz').addClass('xiaoshi')
    })

    $('#zz').hover(function () {
        $(this).removeClass('xiaoshi')
    },function () {
        $(this).addClass('xiaoshi')
    })

//供应信息
    $('.bianda').hover(function () {
        $(this).css({'width':'150px','background':'red'})
        $('.bianda>a>i').css('margin-left','20px')
    },function () {
        $(this).css({'width':'120px','background':'black'})
        $('.bianda>a>i').css('margin-left','0')
    })
    $('#xx').hover(function () {
        $('.bianda').css({'width':'150px','background':'red'})
        $('.bianda>a>i').css('margin-left','20px')
    },function () {
        $('.bianda').css({'width':'120px','background':'black'})
        $('.bianda>a>i').css('margin-left','0')
    })


    $('.bianda').hover(function () {
        $('#xx').removeClass('yyy')
    },function () {
        $('#xx').addClass('yyy')
    })

    $('#xx').hover(function () {
        $('#xx').removeClass('yyy')
    },function () {
        $('#xx').addClass('yyy')
    })



    //导航鼠标滑过变颜色
    var allLi = $('.ddd>ul>li')
    $(allLi).hover(function () {
        $(this).addClass('bian')

        // alert('你好')
    },function () {
        $(this).removeClass('bian')
    })
    //qq交谈。更改背景
    /*var allI = $('.tu>ul>li')
    var alli = $('.tu>ul>li>a>i')
    $(alli).hover(function () {
        $(this).addClass('hongse').css('border','none')
        $(alli[0]).removeClass('tt')
    },function () {
        $(this).removeClass('hongse').css('border','1px solid #000')
        $(alli[0]).addClass('tt')
    })*/
    var allI = $('.tu>ul>li')
    var alli = $('.tu>ul>li>a>i')
    $(alli[0]).hover(function () {
        $(this).addClass('hongse').css('border','none')
        $(this).removeClass('tt')
    },function () {
        $(this).removeClass('hongse').css('border','1px solid #000')
        $(this).addClass('tt')
    })
    $(alli[1]).hover(function () {
        $(this).addClass('hongse').css('border','none')
    },function () {
        $(this).removeClass('hongse').css('border','1px solid #000')
    })



//    下面qq交谈
    var allIi = $('.xiatu>a>i')
    $(allIi[0]).hover(function () {
        $(this).addClass('hongse')
    },function () {
        $(this).removeClass('hongse')
    })
    $(allIi[1]).hover(function () {
        $(this).addClass('hongse').css('color','#fff')
    },function () {
        $(this).removeClass('hongse').css('color','red')
    })
    // 联系方式
    var allImg = $('#b>a>img')
    $(allImg).hover(function () {
        $(this).addClass('ai')
    },function () {
        $(this).removeClass('ai')
    })





//供应信息
    $('.gongying>ul>li').hover(function () {
        $(this).children().css('color','red')
    },function () {
        $(this).children().css('color','#333333')
    })

    //企业在线
        var isTure = true
    $('#z').click(function () {
        if (isTure){
            $('.zxshang>span').css('height','50px')
            $('.zxshang').css('height','190px')
            $('.zaixian').css('height','530px')
        }
        else{
            $('.zxshang>span').css('height','20px')
            $('.zxshang').css('height','160px')
            $('.zaixian').css('height','500px')
        }
        isTure = !isTure

    })

    var allImg = $('.m>a>img')
    $(allImg).hover(function () {
        $(this).addClass('ai')
    },function () {
        $(this).removeClass('ai')
    })


    // var isTure = true
    // $('.zxshang>i').click(function () {
    //     if (isTure){
    //         $('.zaixian').addClass('woaini')
    //     }
    //     else{
    //         $('.zaixian').removeClass('woaini')
    //     }
    //     isTure = !isTure
    //
    // })

    $('.zxshang>p').click(function () {
        $('.zaixian').addClass('woaini')
    })


    $('.qyx').hover(function () {
        $('.qyx>i').css('color','#ffffff')
    },function () {
        $('.qyx>i').css('color','#808080')
    })


    $('.qyx').click(function () {
        $('.zaixian').removeClass('woaini')
    })
    
//    二维码
    $('.dbt>img').hover(function () {
        $('#g').removeClass('wanan').css('margin-top','-27px')
    },function () {
        $('#g').addClass('wanan')
    })
    $('#g').hover(function () {
        $(this).removeClass('wanan').css('margin-top','-27px')
    },function () {
        $(this).addClass('wanan')
    }
    )
    
})






