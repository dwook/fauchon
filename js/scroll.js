$(function(){	


	// 각각의 div높이값을 무조건 사용자 브라우저의 높이값으로 변경
	/*
	var ht = $(window).height();
	$(".wrap>div").height(ht);
	
	$(window).on("resize",function(){
		var ht = $(window).height();
		$(".wrap>div").height(ht);
		$(".navi li").eq(0).click();
	});
	*/
	
	
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('#header').addClass("sticky");
          }
          else{
            $('#header').removeClass("sticky");
          }
    });

    
   
	//스크롤된 위치값에 따른 특정요소의 변화
//	$(window).on("scroll",function(){
//		var st = $(window).scrollTop();
//		
//		if(st>=1 ){
//			$("#header").addClass("on");
//		}else{
//			$("#header").removeClass("on");
//		}
//	});
//	

//
	//클릭 시 해당 위치로 화면 스크롤
	$(".navi li, #gnb li").on("click",function(e){
		e.preventDefault();
		
		var i = $(this).children("a").attr("href");		
		var target = $(i).offset().top;
		var $doc = $("html,body");
		
		$doc.animate({"scrollTop":target},10,"swing");	
		
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
	
	
	
});










