(function(){
    var idx = 0;
    var btns = $(".page-btn").find("span");
    var picTimer= function () {
      pic= setInterval(function () {
        if (idx == -400) {
            idx = 0;
        } else {
            idx -= 100;
        }
        btns.removeClass("current");
        btns.eq(parseInt(-idx / 90)).addClass("current");
        $("#list").stop(true, false).animate({left: idx + "%"}, 1000);
      }, 5000);
    };
    picTimer();
    btns.on("click",function(){
        window.clearInterval(pic);
        var i= btns.index($(this));
        btns.removeClass("current");
        btns.eq(i).addClass("current");
        $("#list").stop(true,false).animate({left:"-"+i+"00%"},1000);
        idx = -i*100;
        picTimer();
    });
})();