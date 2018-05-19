// 图片隐藏
$(function () {
    $(".roof-Container span").click(function () {
        $(".roof").fadeOut()
    })
    // 导航栏悬浮显示
    $(".City-options").mouseover(function () {
        $(".city-name").css({
            display: "block"
        })
    }).mouseout(function () {
        $(".city-name").css({
            display: "none"
        })
    })
    $(".city-name a").click(function () {
        $(this).css({
            backgroundColor: "#f10215",
            color: "#fff"
        })
        $(".City-options>a").text($(this).text())
    })
    $(".city-name a").click(function () {
        $(this).css({
            backgroundColor: "#f10215",
            color: "#fff"
        })
        $(".city-name a").not(this).css({
            backgroundColor: "#fff",
            color: "#ccc"
        })
    })
    $(".header-bar-right-span").mouseover(function () {
        $(".navigation").show()
    }).mouseout(function () {
        $(".navigation").hide()
    })
    $(".navigation").mouseover(function () {
        $(".navigation").show()
    }).mouseout(function () {
        $(".navigation").hide()
    })
    $(".header-bar-right-span2").mouseover(function () {
        $(".service").show()
    }).mouseout(function () {
        $(".service").hide()
    })
    $(".service").mouseover(function () {
        $(".service").show()
    }).mouseout(function () {
        $(".service").hide()
    })
    $(".header-bar-right-span3").mouseover(function () {
        $(".mine").show()
    }).mouseout(function () {
        $(".mine").hide()
    })
    $(".mine").mouseover(function () {
        $(".mine").show()
    }).mouseout(function () {
        $(".mine").hide()
    })
    $(".header-bar-right-span4").mouseover(function () {
        $(".code").show()
    }).mouseout(function () {
        $(".code").hide()
    })
    $(".code").mouseover(function () {
        $(".code").show()
    }).mouseout(function () {
        $(".code").hide()
    })
    $(".shopping-cart").mouseover(function () {
        $(".shopping-trolley").show()
    }).mouseout(function () {
        $(".shopping-trolley").hide()
    })
    // 固定定位导航栏滚动条到500显示
    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top < 500)
            $(".head-of-navigation").fadeOut();
        else if (top > 500)
            $(".head-of-navigation").fadeIn()
    })
    // 返回顶部文字悬浮js
    $(".returnTop a").hover(function () {
        $(".returnTop a").css({
            color: "red"
        })
    }, function () {
        $(".returnTop a").css({
            color: "#fff"
        })
    })
})