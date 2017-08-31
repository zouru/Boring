$(function(){
	dy(120)
	function dy(max){
        var evenW=500/max
		for(var i=0;i<max;i++){
			var str=''
			for(var j=0;j<4;j++){
				str+="<span style='width:"+evenW+"px;background-size:500px 200px;background-position:-"+(i*500/max)+"px'></span>"
			}
			$('<li>').css({width:evenW,transition:" all 800ms "+i*evenW+"ms"}).html(str).appendTo($('ul'))
		}
	}
	$('ol li').click(function(){
		var ind = $(this).index()
		$('ul li').css({transform:"rotateX( "+90*ind+"deg)"})
	})
})