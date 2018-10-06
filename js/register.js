// 遮罩层拖动
$(document).ready(function(){
	$('.close').click(function(){
		$('.user_ks').fadeOut(300);
	});
	$('ul .light4').click(function(){
		$('.user_ks').fadeOut(300);
	})

	// 鼠标按下拖拽
	var maxWidth = $(document).width() - $('.user_ks').width();
	var maxHeight = $(document).height() - $('.user_ks').height();
	$('.user_ks').mousedown(function(e){
		$(this).css('cursor','move');
		// 获取div的位置
		var offset = $(this).offset();
		// 获取鼠标距离div不变的距离
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;
		// 鼠标在盒子中间
		//var x = x - $('.user_ks').width()/2;
		//var y = y - $('.user_ks').height()/2;
		// 鼠标按下移动事件
		$(document).mousemove(function(evt){
			// 获取指定的距离
			var l = evt.pageX - x;
			var t = evt.pageY - y;
			console.log(l+":"+y);
			// 判断边界
			if(l<=0){
				l = 0;
			}else if(l>=maxWidth){
				l = maxWidth;
			}
			if(t<=0){
				t = 0;
			}else if(t>=maxHeight){
				t = maxHeight;
			}
			// 给user_ks绑定移动距离
			$('.user_ks').css({left:l+'px',top:t+'px'});
		})
	})
	// 鼠标抬起
	$(document).mouseup(function(){
		// 回复原来的状态
		$('.user_ks').css('cursor','default');
		// 关闭移动
		$(this).off('mousemove');
	})


})