//二级菜单
(function ($) {
    var oTriangle=$(".triangle");
    var timmer=null;
    oTriangle.each(function (index) {
        $(this).mouseover(function () {
            clearTimeout(timmer);
            oTriangle.addClass("triangle").removeClass("act-triangle");
            oTriangle.children().css("display","none");
            $(this).addClass("act-triangle").removeClass("triangle");
            $(this).find("div").css("display","block")
        }).mouseout(function () {
            timmer=setTimeout(function () {
               // alert(index);
                oTriangle.eq(index).addClass("triangle").removeClass("act-triangle");
                oTriangle.eq(index).find("div").css("display","none");
            },1000);
        });
    });
})(jQuery);
//选项卡
(function ($) {
    function ShiftTab(tab,subtab) {
        tab.each(function (index) {
            $(this).click(function () {
                tab.removeClass("active");
                subtab.removeClass("active");
                $(this).addClass("active");
                subtab.eq(index).addClass("active");
                //tab中有无缝滚动效果时
                var oSlider=subtab.eq(index).find(".slider");
                var oA=oSlider.find("a");
                var width=oA.width()+parseFloat(oA.css("padding-left"))+parseFloat(oA.css("padding-right"))+parseFloat(oA.css("margin-left"))+parseFloat(oA.css("margin-right"))+parseFloat(oA.css("border-right-width"))+parseFloat(oA.css("border-left-width"));
                oSlider.css("width",oA.length*width);
            });
        });
    }
    var osearch=$(".search .tab li");
    var osubsearch=$(".search .subtab li");
    var ocity=$(".city .tab li");
    var osubcity=$(".city .subtab li");
    var ocenter1tab=$(".center1 .tab li");
    var ocenter1subtab=$(".center1 .subtab li");
    var ocenter2tab1=$(".center2 .center2-tab1 li");
    var ocenter2subtab1=$(".center2 .center2-subtab1 li");
    var ocenter2tab2=$(".center2 .center2-tab2 li");
    var ocenter2subtab2=$(".center2 .center2-subtab2 li");
    var ocenter2tab3=$(".center2 .center2-tab3 li");
    var ocenter2subtab3=$(".center2 .center2-subtab3 li");
    ShiftTab(osearch,osubsearch);
    ShiftTab(ocity,osubcity);
    ShiftTab(ocenter1tab,ocenter1subtab);
    ShiftTab(ocenter2tab1,ocenter2subtab1);
    ShiftTab(ocenter2tab2,ocenter2subtab2);
    ShiftTab(ocenter2tab3,ocenter2subtab3);
})(jQuery);

//无缝滚动
(function ($) {
    var oSlider=$(".slider");
    var oNext=$(".showpic .next");
    var oPrev=$(".showpic .prev");
    oSlider.each(function (index) {
        var inow=0;
        var sign=1;//表示动画是否正在进行，1表示不在进行
        oSlider[index].innerHTML +=oSlider.eq(index).html();
        var oA=oSlider.eq(index).find("a");
        var width=oA.width()+parseFloat(oA.css("padding-left"))+parseFloat(oA.css("padding-right"))+parseFloat(oA.css("margin-left"))+parseFloat(oA.css("margin-right"))+parseFloat(oA.css("border-right-width"))+parseFloat(oA.css("border-left-width"));
        //alert(width);
        oSlider.eq(index).css("width",oA.length*width);//隐藏的oA宽度为0；
        oNext.eq(index).click(function () {
            //动画不在进行时，进行下一次动画
            if(sign==1){
                clearInterval(timer);
                sign=0;
                if(inow==oA.length/2){
                    inow=0;
                    oSlider.eq(index).css("left","0");
                    //alert(inow);
                }
                inow++;
                //alert(inow);
                var width=oA.width()+parseFloat(oA.css("padding-left"))+parseFloat(oA.css("padding-right"))+parseFloat(oA.css("margin-left"))+parseFloat(oA.css("margin-right"))+parseFloat(oA.css("border-right-width"))+parseFloat(oA.css("border-left-width"));
                oSlider.eq(index).stop().animate({left:"-"+inow*width+"px"},500,function(){
                    if(inow==oA.length/2){
                        inow=0;
                        oSlider.eq(index).css("left","0");
                        //alert(inow);
                    }
                    autoplay();
                    sign=1;
                });
            }
        });
        oPrev.eq(index).click(function () {
            //动画不在进行时，进行下一次动画
            if(sign==1){
                clearInterval(timer);
                sign=0;
                //alert(inow);
                var width=oA.width()+parseFloat(oA.css("padding-left"))+parseFloat(oA.css("padding-right"))+parseFloat(oA.css("margin-left"))+parseFloat(oA.css("margin-right"))+parseFloat(oA.css("border-right-width"))+parseFloat(oA.css("border-left-width"));
                if(inow==0){
                    inow=oA.length/2;
                    oSlider.eq(index).css("left",-inow*width+"px");
                    //alert(inow);
                    //alert(oSlider.eq(index).css("left"));
                }
                inow--;
                oSlider.eq(index).stop().animate({left:"-"+inow*width+"px"},500,function(){
                    if(inow==0){
                        inow=oA.length/2;
                        oSlider.eq(index).css("left",-inow*width+"px");
                    }
                    autoplay();
                    sign=1;
                });
            }
        });
        var timer=null;
        function  autoplay() {
            timer = setInterval(function () {
                if (sign == 1 && oSlider.eq(index).parent().parent().parent().hasClass("active")) {
                    sign = 0;
                    if (inow == oA.length / 2) {
                        inow = 0;
                        oSlider.eq(index).css("left", "0");
                        //alert(inow);
                    }
                    inow++;
                    //alert(inow);
                    var width=oA.width()+parseFloat(oA.css("padding-left"))+parseFloat(oA.css("padding-right"))+parseFloat(oA.css("margin-left"))+parseFloat(oA.css("margin-right"))+parseFloat(oA.css("border-right-width"))+parseFloat(oA.css("border-left-width"));
                    oSlider.eq(index).stop().animate({left: "-" + inow *width + "px"}, 500, function () {
                        if (inow == oA.length / 2) {
                            inow = 0;
                            oSlider.eq(index).css("left", "0");
                            //alert(inow);
                        }
                        sign = 1;
                    });
                }
            }, 3000)
        }
        autoplay();
    })
})(jQuery);

//广播消息
(function($){
    var data=[{"num":"01","cotent":"解读时与最高端的时尚生活品味为伍。","time":"04/03/2017","url":"##"},
                {"num":"02","cotent":"斯卡迪哈数据库大胜靠德。","time":"03/04/2015","url":"##"},
                {"num":"03","cotent":"闪电发货腐乳忽然不。","time":"07/14/2014","url":"##"},
                {"num":"04","cotent":"是诶汇添富拿不到撒。","time":"11/21/2013","url":"##"}];
    var notice=$(".notice");
    var ul=$(".notice ul");
    var str="";
    for(var i=0;i<data.length;i++){
        str+="<li><h1>"+data[i].num+"</h1><div class='spirit laba'></div><p>"+data[i].cotent+"</p><a href='"+data[i].url+"'><div class='spirit link'></div></a><span>"+data[i].time+"</span></li>";
    }
    ul.html(str);
    var inow=0;
    var timer=null;
    var height=parseInt(ul.find("li").css("height"));
    function autoplay(){

        timer=setInterval(function(){
            inow++;
            if(inow>data.length-1){
                inow=0;
            }
            ul.animate({"top":"-"+inow*height+"px"},500);
        },4000)
    }
    autoplay();
})(jQuery);
//图片选择
(function($){
    var oA=$(".tbtx .center1 .showpic .frame .slider a");
    oA.each(function(index){
        oA.eq(index).click(function(){
            oA.removeClass("active");
            $(this).addClass("active");
        })
    })
})(jQuery);
//随机文字大小
(function($){
    var hot_a=$(".hot-spot a");
    var size=parseInt(hot_a.css("font-size"));
    hot_a.each(function(index){
        var rate=0.5*Math.random()+1;
        //alert(size*rate+"px");
        $(this).css("font-size",size*rate+"px");
    });
})(jQuery);
//排行榜
(function($){
    var oli=$(".right2 ul li");
    var storage=Array();
    oli.each(function(index){
        if($(this).attr("class")=="active"){
            storage["content"]=$(this).html();
            storage["num"]=$(this).find(".num").text();
            //alert(storage["content"]);
            //alert(storage["num"]);
            $(this).find(".num").html("<img src='images/ranking-pic.png' alt=''>")
        }
        $(this).mouseover(storage,function(ev){
            //alert(ev.data['num']);
            //alert(ev.data['content']);
            oli.eq(ev.data['num']-1).html(ev.data["content"]);
            oli.removeClass("active");
            storage["content"]=$(this).html();
            storage["num"]=$(this).find(".num").text();
            $(this).addClass("active").find(".num").html("<img src='images/ranking-pic.png' alt=''>");
        });
    });
})(jQuery);



















