function IMG(obj){
	//数据渲染部分
	var theW = $(obj.FtherId).css('width')
	var theH = $(obj.FtherId).css('height')
	$(obj.FtherId).append("<ul></ul>") 
	if(obj.isFyq){//分页器
         $(obj.FtherId).append("<ol></ol>")
    }
    $.each(obj.ImgSum,function(a,b){
	    $(obj.FtherId+'>ul').append("<li><img src="+b+"></li>")
	    if (obj.isFyq){
	    	$(obj.FtherId+'>ol').append("<li>"+(a+1)+"</li>")
	        $(obj.FtherId+' ol').css({'position':'absolute',right:10,bottom:10})
            $(obj.FtherId+'>ol>li').css({width:30,height:30,background:'green',borderRadius:50,textAlign:'center',lineHeight:"30px",marginRight:10,color:'#fff'})
	    }   
    })
    $(obj.FtherId+'>ul').css('width',parseInt(theW)*(obj.ImgSum.length+1))
    $(obj.FtherId).find('img').css({width:theW,height:theH})
    $(obj.FtherId+'>ul').append($(obj.FtherId+'>ul>li:eq(0)').clone())
    $(obj.FtherId+' li').css('float','left')
    $(obj.FtherId+'>ul>li').css("overflow",'hidden')
    $(obj.FtherId+'>ul>li:eq(0)').css('width',parseInt(theW)).siblings().css('width',0)
    $(obj.FtherId+'>ol>li:eq(0)').css('background','red')
    var num = 0
    var nub = 0
    function tim(){
    	num++
    	nub++ 
    	dy()
    }
    var timer = setInterval(tim,1000)
    $(obj.FtherId).hover(function(){
       clearInterval(timer)
    },function(){
       timer = setInterval(tim,1000)
    }
    )
    $(obj.FtherId+'>ol>li').click(function(){
    	var ind =$(this).html()-1
    	nub=ind
    	num=ind
        dy()
    }) 
    if(obj.isTab){//左右点击
    	 $(obj.FtherId).append("<span><</span><span>></span>")
    	 $(obj.FtherId+' span').css({width:40,height:60,background:'#666',display:'inline-block',textAlign:'center',lineHeight:"60px",color:'#fff',fontSize:"30px",position:'absolute',top:120})
         $(obj.FtherId+' span:eq(0)').css('left',0).next("span").css('right',0)
    	 $(obj.FtherId+' span:eq(0)').click(function(){
    	   nub--
    	   num--
    	   dy()
         })
         $(obj.FtherId+' span:eq(1)').click(function(){
    	   nub++
    	   num++
    	  dy()
        })
    }
    function dy(){
    	if(num>obj.ImgSum.length){
          $(obj.FtherId+'>ul>li:eq(0)').css('width',parseInt(theW)).siblings().css('width',0)
          num=1
        }else if(num<0){
          $(obj.FtherId+'>ul>li:eq('+obj.ImgSum.length+')').css('width',parseInt(theW)).siblings().css('width',0)
          num=obj.ImgSum.length-1
        }
        if(nub>=obj.ImgSum.length){
          $(obj.FtherId+'>ol>li:eq(0)').css('background','red').siblings().css('background','green')
          nub =0
        }else if(nub<0){
          nub=obj.ImgSum.length-1
        }
    	$(obj.FtherId+'>ul>li:eq('+num+')').stop(true,true).animate({'width':parseInt(theW)}).siblings().stop(true,true).animate({'width':0})
    	$(obj.FtherId+'>ol>li:eq('+nub+')').css('background','red').siblings().css('background','green')      
    }
}
