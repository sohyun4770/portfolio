$(function () {

    //변수 ht에 브라우저의 높이값을 저장
    let ht = $(window).height();
    //브라우저의 높이값을 section의 높이값으로 지정
    $("section,footer").height(ht);

    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값 갱신
    $(window).on('resize', function () {
        ht = $(window).height();
        $("section").height(ht);
    });


   

    /* 메뉴버튼 클릭 시 */
    $("#menu li").on("click", function (e) {
        e.preventDefault();

        //변수 ht에 브라우저의 높이값 저장
        ht = $(window).height();


        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i = $(this).index();

        //브라우저의 높이값*박스의 순서 값은 현재 박스의 스크롤 위치값과 동일

        var nowTop = i * ht;

        //해당 스크롤의 위치값으로 문서를 이동
        $("html,body").stop().animate({
            "scrollTop": nowTop
        }, 1400)
    });


    $(window).on("scroll", function () {
        //변수 ht에 현재 브라우저의 높이값 저장
        ht = $(window).height();
        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();
      


        for (var i = 0; i < 7; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass("on");
                $("#wrap section").removeClass("on");
                $("#wrap section").eq(i).addClass("on");
                              
            }
        }

    });

    //section 위에서 마우스 휠을 움직이면
    $("section,footer").on("mousewheel",function(e,delta){

        //마우스 휠을 올렸을 때 
        if(delta>0){
            //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top 위치 저장
            var prev = $(this).prev().offset().top;
            //문서 전체를 prev에 저장된 위치로 이동
            $("html,body").stop().animate({"scrollTop":prev},500);
            
        }else if(delta<0){//마우스 휠을 내렸을 때
            //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top 위치 저장
            var next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동
            $("html,body").stop().animate({"scrollTop":next},500);
        }
    });



});