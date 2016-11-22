



$(function() {
    $.scrollify({
        section : ".box",
    });
});


$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('#header').addClass("sticky");
    }
    else{
    $('#header').removeClass("sticky");
    }
});



//마우스의 움직임에 반응하는 서브 이미지 설정하기
$(window).on("mousemove",function(e){
    //변수 posX에 마우스 커서 x축 위치 저장
    var posX=e.pageX;
    //변수 posY에 마우스 커서 y축 위치 저장
    var posY=e.pageY;

//첫번째 박스의 이미지 위치 값을 마우스커서의 위치값과 연동
$(".left").css({"left":0-(posX/10)});
$(".right").css({"right":0-(posX/10)});

});



//클릭 시 해당 위치로 화면 스크롤
$(".navi li, #gnb li").on("click",function(e){
    e.preventDefault();

    var i = $(this).children("a").attr("href");		
    var target = $(i).offset().top;
    var $doc = $("html,body");

    $doc.animate({"scrollTop":target},100,"swing");	

});	
	
	
//스크롤시 메뉴바 활성화
$(window).on("scroll",function(){
    var scroll = $(window).scrollTop();		
    var posBox1 = $("#box1").offset().top;
    var posBox2 = $("#box2").offset().top;
    var posBox3 = $("#box3").offset().top;
    var posBox4 = $("#box4").offset().top;
    var posBox5 = $("#box5").offset().top;		
    var posBox6 = $("#box6").offset().top;


    if( scroll>=posBox1 && scroll <posBox2){
        $(".navi li a, #gnb>li>a").removeClass("on");
        $(".navi li").eq(0).children("a").addClass("on");					
        $("#gnb>li").eq(0).children("a").addClass("on");

    }

    if( scroll>=posBox2 && scroll <posBox3){
        $(".navi li a, #gnb>li>a").removeClass("on");
        $(".navi li").eq(1).children("a").addClass("on");				
        $("#gnb>li").eq(1).children("a").addClass("on");


    }

    if( scroll>=posBox3 && scroll <posBox4){
        $(".navi li a, #gnb>li>a").removeClass("on");
        $(".navi li").eq(2).children("a").addClass("on");				
        $("#gnb>li").eq(2).children("a").addClass("on");


    }

    if( scroll>=posBox4-1 && scroll <posBox5){
        $(".navi li a, #gnb>li>a").removeClass("on");
        $(".navi li").eq(3).children("a").addClass("on");				
        $("#gnb>li").eq(3).children("a").addClass("on");

    }

    if( scroll>=posBox5-1 && scroll <posBox6 ){
        $(".navi li a, #gnb>li>a").removeClass("on");
        $(".navi li").eq(4).children("a").addClass("on");			
        $("#gnb>li").eq(4).children("a").addClass("on");

    }	

    if( scroll>=posBox6-1 ){
        $(".navi li a, #gnb>li>a").removeClass("on");
        $(".navi li").eq(5).children("a").addClass("on");			
        $("#gnb>li").eq(5).children("a").addClass("on");

    }	
});

	
	











