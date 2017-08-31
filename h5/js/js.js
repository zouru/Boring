$(function(){

var BL_x=0
var BL_y=0
duo()
	
		
  $('#qiu').click(function(){
  	qiu()
  })
  $('#ping').click(function(){
  		$('#box li').each(function(i,val){
	 	$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"scale(0.01) rotateY(0deg) rotateX(0deg)  translateZ(0px)",transition: 'all 1000ms'})
	 	})
  })
  $('#duo').click(function(){
       duo()
  })



 function duo(){
    $('#box li').each(function(i,val){
      if(i<49){
        dyone(i,0,0)
      }else if(49<=i&&i<98){
        dyone(i,500,1)
      }else if(98<=i&&i<147){
        dyone(i,-500,2)
      }else if(147<=i&&i<196){
        dyone(i,1000,3)
      }else if(196<=i&&i<238){
        dyone(i,-1000,4)
      }
    })

 }
function dyone(i,deZ,bs){
		if(i%7==0){
      		dy(i,0,deZ,bs)
      	}else if(i%7==1){
      		dy(i,150,deZ,bs)
      	}else if(i%7==2){
      		dy(i,-150,deZ,bs)
      	}else if(i%7==3){
      		dy(i,300,deZ,bs)
      	}else if(i%7==4){
      		dy(i,-300,deZ,bs)
      	}else if(i%7==5){
      		dy(i,450,deZ,bs)
      	}else if(i%7==6){
      		dy(i,-450,deZ,bs)
      	}
}
function dy(i,deX,deZ,bs){
	if(parseInt(i/7)-bs*7==0){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(0px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}if(parseInt(i/7)-bs*7==1){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(150px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}if(parseInt(i/7)-bs*7==2){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(-150px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}if(parseInt(i/7)-bs*7==3){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(300px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}if(parseInt(i/7)-bs*7==4){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(-300px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}if(parseInt(i/7)-bs*7==5){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(450px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}if(parseInt(i/7)-bs*7==6){
		$('#box li').eq(i).css({'transform-origin':'50px 50px',transform:"rotateY(0deg) rotateX(0deg) translateZ("+deZ+"px) translateY(-450px)  translateX("+deX+"px)",transition: 'all 1000ms'})
	}
    
}























	$(document).mousedown(function(e){
       var x= e.pageX
       var y= e.pageY
       e.preventDefault()
       $(document).mousemove(function(e){
       	   var thex=e.pageX
       	   var they=e.pageY
       	   
       	   if(thex>x){
       	      BL_x++
       	      if(BL_x>=360)BL_x=0
       	   	  $('#box').css('transform',"perspective(800px) rotateY("+BL_x+"deg) rotateX("+BL_y+"deg)")
       	   	  x=thex
       	   }else if(thex<x){
       	   	  BL_x--
       	   	  if(BL_x<=-360)BL_x=0
       	   	  $('#box').css('transform',"perspective(800px) rotateY("+BL_x+"deg) rotateX("+BL_y+"deg)")
       	   	  x=thex
       	   }

       	   if(they<y){
       	      BL_y++
       	      if(BL_y>=360)BL_y=0
       	   	  $('#box').css('transform',"perspective(800px) rotateY("+BL_x+"deg) rotateX("+BL_y+"deg)")
       	   	  y=they
       	   }else if(they>y){
       	   	  BL_y--
       	   	  if(BL_y<=-360)BL_y=0
       	   	  $('#box').css('transform',"perspective(800px) rotateY("+BL_x+"deg) rotateX("+BL_y+"deg)")
       	   	  y=they
       	   }


       })
	})
	$(document).mouseup(function(){
		$(document).off('mousemove')
	})


	function qiu(){
		var num=0
	    var num1=0
	    var num2=0
	    var num3=0
	    var num4=0
	    var num5=0
	    var num6=0
	    var num7=0
	    var num8=0
	    var num9=0
	    var num10=0
	    var num11=0
	    var num12=0
	    var num13=0
	    var num14=0
		$('#box li').each(function(i,val){
	 if(i<30){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num+'deg) translateZ(500px) scale(1)',transition: 'all 1000ms'})
	 	 num+=12
	 	}else if(30<=i&&i<54){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num1+'deg) rotateX('+12+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num1+=15
	 	}else if(54<=i&&i<74){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num2+'deg) rotateX('+24+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num2+=18
	 	}else if(74<=i&&i<92){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num3+'deg) rotateX('+36+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num3+=20
	 	}else if(92<=i&&i<107){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num4+'deg) rotateX('+48+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num4+=24
	 	}else if(107<=i&&i<119){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num5+'deg) rotateX('+60+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num5+=30
	 	}else if(119<=i&&i<128){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num6+'deg) rotateX('+72+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num6+=40
	 	}else if(128<=i&&i<134){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num7+'deg) rotateX('+84+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num7+=60
	 	}else if(134<=i&&i<158){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num8+'deg) rotateX('+(-12)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num8+=15
	 	}else if(158<=i&&i<178){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num9+'deg) rotateX('+(-24)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num9+=18
	 	}else if(178<=i&&i<196){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num10+'deg) rotateX('+(-36)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num10+=20
	 	}else if(196<=i&&i<211){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num11+'deg) rotateX('+(-48)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num11+=24
	 	}else if(211<=i&&i<223){
	 		console.log(1)
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num12+'deg) rotateX('+(-60)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num12+=30
	 	}else if(223<=i&&i<232){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num13+'deg) rotateX('+(-72)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num13+=40
	 	}else if(232<=i&&i<238){
	 	 $('#box li').eq(i).css({'transform-origin':'50px 50px','transform':'rotateY('+num14+'deg) rotateX('+(-84)+'deg)  translateZ(500px) scale(1)',transition: 'all 1000ms'})
	     num14+=60
	 	}     
	  })
    
	}
})