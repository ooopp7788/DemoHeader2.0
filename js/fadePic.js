(function(){
    var idx = 0;
    var btns = $(".page-btn").find("span");
    $("#list").find("li").css("display", "none");
    $($("#list").find("li")[0]).css("display", "");
    var picTimer= function () {
      pic= setInterval(function () {
        $($("#list").find("li")[idx]).fadeOut(1000);
        if (idx == 4) {
            idx = 0;
        } else {
            idx += 1;
        }
        btns.removeClass("current");
        btns.eq(idx).addClass("current");
        $($("#list").find("li")[idx]).fadeIn(1000);
      }, 5000);
    };
    picTimer();
    btns.on("click",function(){
        window.clearInterval(pic);
        var i= btns.index($(this));
        btns.removeClass("current");
        btns.eq(i).addClass("current");
        $($("#list").find("li")[idx]).fadeOut(1000);
        $($("#list").find("li")[i]).fadeIn(1000);
        idx = i;
        picTimer();
    });
    var r_arrow = $(".right-arrow");
    var l_arrow = $(".left-arrow");
    r_arrow.click(function () {
        window.clearInterval(pic);
        $($("#list").find("li")[idx]).fadeOut(1000);
        if (idx == 4) {
            idx = 0;
        } else {
            idx += 1;
        }
        btns.removeClass("current");
        btns.eq(idx).addClass("current");
        $($("#list").find("li")[idx]).fadeIn(1000);
        picTimer();
    });
    l_arrow.click(function () {
        window.clearInterval(pic);
        $($("#list").find("li")[idx]).fadeOut(1000);
        if (idx == 0) {
            idx = 4;
        } else {
            idx -= 1;
        }
        btns.removeClass("current");
        btns.eq(idx).addClass("current");
        $($("#list").find("li")[idx]).fadeIn(1000);
        picTimer();
    })
})();