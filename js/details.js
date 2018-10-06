// 小轮播图
$(function(){
	//定义下标
	var m = 0;
	var timer = null;
	function automove(){
		timer = setInterval(function(){
			// 下标自增
			m++;
			// console.log(m);
			// 来一次下标判断
			if(m>2){
				m=0;
			}
			$('.lunbo_list li').eq(m).fadeIn().siblings('li').fadeOut();
			// 来一次下标判断
			if(m<0){
				m = 2;
			$('.lunbo_list li').eq(m).fadeIn().siblings('li').fadeOut();
			}
		},1000)
		automove();
		// // 鼠标移上箭头显示图片
		// 	$('.outer').mouseenter(function(){
		// 		clearInterval(timer);
		// 		$('.left').mousedown(function(){
		// 			// 保存一个当前的下标
		// 			a = $(this).index();
		// 			$('.lunbo_list li').eq(a).fadeIn().siblings('li').fadeOut();
		// 		})
		// 		$('right').mousedown(function(){
		// 			// 保存一个当前的下标
		// 			b = $(this).index();
		// 			$('.lunbo_list li').eq(b).fadeIn().siblings('li').fadeOut();
		// 		})
		// 	}).mouseleave(function(){
		// 		automove();
		// 	})
	}
})

// 放大镜
$('.small').mousemove(function(e){
	// 大图和移动块显示
	$('.big,#move').show();
	// 获取鼠标的坐标
	var x = e.pageX - $(this).offset().left;
	var y = e.pageY - $(this).offset().top;
	// 鼠标居中在小块的中间
	var x=x-$('#move').width()/2;
	var y=y-$('#move').height()/2;
	// 判断鼠标在可视区域的边界
	// x轴
	if(x<0){
		x = 0;
	}else if(x>=$('.small').width() - $('#move').width()){
		x = $('.small').width() - $('#move').width();
	}
	// y轴
	if(y<0){
		y = 0;
	}else if(y>=$('.small').height() - $('#move').height()){
		y = $('.small').height() - $('#move').height();
	}

	// 绑定move
	$('#move').css({left:x,top:y});
	//算出大图和小图的比例关系
	var scale = $('.big>img').width()/$('.small>img').width(); 
	console.log(scale);
	// 设置大图的移动
	$('.big>img').css({left:-x*scale,top:-y*scale});
	// 更换图片
	$('.big>img').attr('src',$('#small_pic').attr('src'));

}).mouseout(function(){
	$('.big,#move').hide();
})
// 更换小图的图片
$('.dian>li>img').click(function(){
	$('.small>img').attr('src',$(this).attr('src'));
})