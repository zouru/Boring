function Stoborem(obj){//总数量  显示个数 初始
	        var theid=obj.theId,
	            nub = isNaN(obj.maxNum)?10:obj.maxNum,
	            fy = isNaN(obj.fyNum)?5:obj.fyNum,
	            load = isNaN(obj.load)?1:obj.load,
	            isClick=Boolean(obj.isClick)
            if(isClick){
            	$(theid).append('<span>prev</span>')
            }
	        $(theid).append('<ul>')
	        if(isClick){
            	$(theid).append('<span>next</span>')
            }
            for(var i=0;i<nub;i++){
               $(theid).find('ul').append("<li>"+(i+1)+"</li>")
            }
            dy(fy,load-1)
			$(theid+'>ul>li').click(function(){
				var ind;
				var the = $(this)
				$(theid+'>ul>li:not(.dian)').each(function(i,val){
					if(the.text()==val.innerHTML){
						ind = i
						load=ind
					}
				})
				dy(fy,ind)
			})
			if(isClick){
				$(theid+'>span').eq(0).click(function(){
					load--
					if(load<0){
						load=0
					}
					dy(fy,load)
				})
				$(theid+'>span').eq(1).click(function(){
					load++
					if(load>nub-1){
						load=nub
					}
					dy(fy,load)
				})
		    }
			function dy(fy,ind){
				$(theid+'>ul>li:not(.dian)').eq(ind).css('background','red').siblings().css('background','skyblue')
				$(theid+'>ul>li').hide()
				$(theid+'>ul>li:first').show()
				$(theid+'>ul>li:last').show()
			    $('.dian').remove()				
				var a=Math.floor(fy/2)
				var b=fy-a
				var one = ind-a
				var two = ind+b
				if(one<=1||two>=nub-1){
				   if(one<=0){
					  two -=one
					  one = 0
					  $(theid+'>ul>li').eq(two-1).after("<li class='dian'>...</li>")
				   }else if(one==1){
					  $(theid+'>ul>li').eq(two-1).after("<li class='dian'>...</li>")
				   }
				   if(two>=nub){
					  one-=two-nub
					  two=nub	
					  $(theid+'>ul>li').eq(one).before("<li class='dian'>...</li>")
				   }else if(two==nub-1){
					  $(theid+'>ul>li').eq(one).before("<li class='dian'>...</li>")
				   }
				}else{
					 $(theid+'>ul>li').eq(two-1).after("<li class='dian'>...</li>")
					 $(theid+'>ul>li').eq(one).before("<li class='dian'>...</li>")
				}
				$(theid+'>ul>li:not(.dian)').slice(one,two).show()
			}			
}