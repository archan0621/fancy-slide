$(document).ready(function(){
    var cnt=0
    let w = $(window).width() / 2;
    $(document).on('mousewheel',function(e){
        if($(".sl").is(":animated")) return true;
        if($(".main").is(":animated")) return true;
        if($(".sub").is(":animated")) return true;
        var wheel = e.originalEvent.wheelDelta; 

        if(wheel>0){
            cnt--
        }else{
            cnt++
        }
        switch(cnt) {
            case 0:
                $(".left").animate({"top":"-100%"},500)
                $(".right").animate({"bottom":"-100%"},500)
                break;
            case 1:
                $(".left").animate({"top":"0"},500)
                $(".right").animate({"bottom":"0"},500)
                $(".main2").animate({"right":"-100%"},500)
                $(".main2 .sub").animate({"left":0},500)
                break;
            case 2:
                $(".main1").animate({"left":"-100%"},500)
                $(".main2").animate({"right":0},500)
                $(".main2 .sub").animate({"left":0},500)
                break;
            case 3:
                $(".main1").animate({"left":0},500)
                $(".main1 .sub").animate({"left":0},500)
                $(".main2 .sub").animate({"left":-w + "px"},500)
                break;
            case 4:
                $(".main1 .sub1").animate({"left":-w + "px"},500)
                $(".main2 .sub2").animate({"left":-w*2 + "px"},500)
                $(".main1 .sub2").animate({"left":0},500)
                $(".main2 .sub1").animate({"left":-w + "px"},500)
                break;
            case 5:
                $(".main1 .sub1").animate({"left":-w + "px"},500)
                $(".main2 .sub2").animate({"left":-w*2 + "px"},500)
                $(".main1 .sub2").animate({"left":-w + "px"},500)
                $(".main2 .sub1").animate({"left":-w*2 + "px"},500)
                break;
            case 6:
                $(".main1 .sub").animate({"left":-w*2 + "px"},500)
                $(".main2 .sub").animate({"left":-w*3 + "px"},500)
                break;
            default:
                if(cnt>0){
                    cnt=0
                    $(".left").animate({"top":"-100%"},500)
                    $(".right").animate({"bottom":"-100%"},500)
                    setTimeout(function(){
                        $(".main1").css({"left":"-100%"},500)
                        $(".main2").css({"right":"-100%"},500)
                        $(".main1 .sub").css({"left":0})
                        $(".main2 .sub").css({"left":0})
                    },500)
                }
                if(cnt<0){
                    cnt=6
                    $(".main1").css({"left":0},500)
                    $(".main2").css({"right":0},500)
                    $(".main1 .sub").css({"left":-w*2 + "px"},500)
                    $(".main2 .sub").css({"left":-w*3 + "px"},500)
                    $(".left").animate({"top":"0"},500)
                    $(".right").animate({"bottom":"0"},500)
                }
                break;
        }
            
        
    });
})