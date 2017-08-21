/**
 * Created by Administrator on 2017/8/10.
 */
$(window).on("load resize",function(){
    var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    $("#section1").css("height",h);
    $("#section2").css("height",h);

    $(".section1-content").css("padding-top",h/3);
    $(".section2-content").css("margin-top",h/5);
    $(".section3-content").css("margin-top",h/5);
    $(".section4-content").css("margin-top",h/5);
    $(".section5-content").css("margin-top",h*(2/5));
    $(".section3-html").css("height",h*(3/5));
    $(".section3-css").css("height",h*(3/5));
    $(".section3-js").css("height",h*(3/5));
    $(".section3-content").css("margin-bottom",h/5);
    $(".section4-img").css("height",h*(3/5));
    $(".section4-txt").css("height",h*(3/5));
    $(".section4-content").css("margin-bottom",h/5);
    $(".section5-img").css("height",h*(2/5));
    $(".section5-txt").css("height",h*(2/5));
    $(".section5-content").css("margin-bottom",h/5);

    var normal=0;
    var clicked="2px solid #00c3f5";
    var s1=document.getElementById('s1');
    s1.onclick=function () {
        $("#s1").css("border-bottom",clicked);
        $("#s2,#s3,#s4,#s5").css("border-bottom",normal);
    }
    var s2=document.getElementById('s2');
    s2.onclick=function () {
        $("#s2").css("border-bottom",clicked);
        $("#s1,#s3,#s4,#s5").css("border-bottom",normal);
    }
    var s3=document.getElementById('s3');
    s3.onclick=function () {
        $("#s3").css("border-bottom",clicked);
        $("#s2,#s1,#s4,#s5").css("border-bottom",normal);
    }
    var s4=document.getElementById('s4');
    s4.onclick=function () {
        $("#s4").css("border-bottom",clicked);
        $("#s2,#s3,#s1,#s5").css("border-bottom",normal);
    }
    var s5=document.getElementById('s5');
    s5.onclick=function () {
        $("#s5").css("border-bottom",clicked);
        $("#s2,#s3,#s4,#s1").css("border-bottom",normal);
    }
    var temp_h=0.8*h;
    window.onscroll = function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;

        if(t<=temp_h){
            $("#s1").css("border-bottom",clicked);
            $("#s2,#s3,#s4,#s5").css("border-bottom",normal);
        }else if(t>temp_h&&t<=2*temp_h){
            $("#s2").css("border-bottom",clicked);
            $("#s1,#s3,#s4,#s5").css("border-bottom",normal);
        }else if(t>2*temp_h&&t<=3*temp_h){
            $("#s3").css("border-bottom",clicked);
            $("#s2,#s1,#s4,#s5").css("border-bottom",normal);
        }else if(t>3*temp_h&&t<=6*temp_h){
            $("#s4").css("border-bottom",clicked);
            $("#s2,#s3,#s1,#s5").css("border-bottom",normal);
        }else{
            $("#s5").css("border-bottom",clicked);
            $("#s2,#s3,#s4,#s1").css("border-bottom",normal);
        }
    }

    document.getElementById('section5-email').onclick=function () {
        $(".section5-ME").css("display","block");
        $(".section5-QQ").css("display","none");
        $(".section5-WX").css("display","none");
    }
    document.getElementById('section5-tele').onclick=function () {
        $(".section5-ME").css("display","block");
        $(".section5-QQ").css("display","none");
        $(".section5-WX").css("display","none");
    }
    document.getElementById('section5-qq').onclick=function () {
        $(".section5-ME").css("display","none");
        $(".section5-QQ").css("display","block");
        $(".section5-WX").css("display","none");
    }
    document.getElementById('section5-wx').onclick=function () {
        $(".section5-ME").css("display","none");
        $(".section5-QQ").css("display","none");
        $(".section5-WX").css("display","block");
    }

    var EventUtil={
        addHandler:function (element,type,handler) {
            if(element.addEventListener){
                element.addEventListener(type,handler,false);
            }else if(element.attachEvent){
                element.attachEvent("on"+type,handler);
            }else{
                element["on"+type]=handler;
            }
        },
        removeHandler:function (element,type,handler) {
            if(element.removeEventListener){
                element.removeEventListener(type,handler,false);
            }else if(element.detachEvent) {
                element.detachEvent("on" + type, handler);
            }else{
                element["on"+type]=null;
            }
        },
        getEvent:function (event) {
            return event?event:window.event;
        },
        getTarget:function (event) {
            return event.target||event.srcElement;
        },
        preventDefault:function (event) {
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue=false;
            }
        },
        stopPropagation:function (event) {
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble=true;
            }
        },
        getRelatedTarget:function (event) {
            if(event.relatedTarget){
                return event.relatedTarget;
            }else if(event.toElement){
                return event.toElement;
            }else if(event.fromElement){
                return event.fromElement;
            }else{
                return null;
            }
        },
        getWheelDelta:function (event) {
            if(event.wheelDelta){
                //return (client.engine.opera&&client.engine.opera<9.5 ? -event.wheelDelta:event.wheelDelta);
                return event.wheelDelta;
            }else{
                return event.wheelDelta;
            }
        }
    };

    (function () {
        function handleMouseWheel(event) {
            event=EventUtil.getEvent(event);
            var delta=EventUtil.getWheelDelta(event);
            // console.log(delta);
            var py=event.pageY;
            if(py<=temp_h&&delta==-120){
                console.log("sss");
                //s2.firstChild.click();
            }

        }
        EventUtil.addHandler(document,"mousewheel",handleMouseWheel);
        EventUtil.addHandler(document,"DOMMouseScroll",handleMouseWheel);
    })();

    $(".section3-html")[0].onmouseover=function () {
        $("#section3-1-tit").css("top","10%");
        $("#section3-1-txt").css("display","block");
    }
    $(".section3-html")[0].onmouseout=function () {
        $("#section3-1-tit").css("top","20%");
        $("#section3-1-txt").css("display","none");
    }
    $(".section3-css")[0].onmouseover=function () {
        $("#section3-2-tit").css("top","10%");
        $("#section3-2-txt").css("display","block");
    }
    $(".section3-css")[0].onmouseout=function () {
        $("#section3-2-tit").css("top","20%");
        $("#section3-2-txt").css("display","none");
    }
    $(".section3-js")[0].onmouseover=function () {
        $("#section3-3-tit").css("top","10%");
        $("#section3-3-txt").css("display","block");
    }
    $(".section3-js")[0].onmouseout=function () {
        $("#section3-3-tit").css("top","20%");
        $("#section3-3-txt").css("display","none");
    }
    // $(".simg")[1].onmouseover=function () {
    //     console.log("ffff");
    // }
    $(".simg")[0].onclick=function () {
        $("#simg1").css("border","1px solid #00c3f5");
        $("#simg2").css("border","1px solid #fff");
        $("#simg3").css("border","1px solid #fff");
        $("#img1").css("display","block");
        $("#img2").css("display","none");
        $("#img3").css("display","none");
    }
    $(".simg")[1].onclick=function () {
        $("#simg2").css("border","1px solid #00c3f5");
        $("#simg1").css("border","1px solid #fff");
        $("#simg3").css("border","1px solid #fff");
        $("#img1").css("display","none");
        $("#img2").css("display","block");
        $("#img3").css("display","none");
    }
    $(".simg")[2].onclick=function () {
        $("#simg3").css("border","1px solid #00c3f5");
        $("#simg2").css("border","1px solid #fff");
        $("#simg1").css("border","1px solid #fff");
        $("#img1").css("display","none");
        $("#img2").css("display","none");
        $("#img3").css("display","block");
    }
});


