$(function(){
    var oldtop=  parseInt($(".side-list").css("top"));
    window.onscroll= function(){
        var st = $(document).scrollTop();
        if(st> 140){
            var topnew = parseInt(oldtop+st-140);
            $(".side-list").css("top",topnew+"px");
            $(".head").css("border-radius","100px").stop().animate({
                "width":"100px",
                "height":"100px"
            },150);
            this.after = true;
        }else{
            if(this.after){
                $(".side-list").css("top",oldtop+"px");
                if($(".head").css("width")!= "150px"){
                    $(".head").css("border-radius","150px").stop().animate({
                        "width":"150px",
                        "height":"150px"
                    },150);
                    this.after = false;
                }
            }
        }
    }
});