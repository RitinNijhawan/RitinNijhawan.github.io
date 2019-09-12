$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "#23b574");
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })

 





