// 轮播图
$(document).ready(function(){
	// 声明全局变量，保存图片以及数字的下标
	var m = 0;
	// 声明计时器
	var timer = null;
	// 自动轮播函数
	function autorun(){
		timer = setInterval(function(){
			// 下标自增
			m ++;
			// 来一次下标判断
			if(m>5){
				m = 0;
			}
			// 图片显示
			$('.small li').eq(m).addClass('show').siblings('li').removeClass('show');
			// 显示数字
			$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
		},1000)
	}
	autorun();
	// 设置点击数字显示相应的图片
	// 鼠标移入移入事件
	$('.outer').mouseenter(function(){
		// 清除计时器
		clearInterval(timer);
	$('.num li').mouseenter(function(){
		// 获取一下当前数字的下标
		m = $(this).index();
		// 显示图片
		$('.small li').eq(m).addClass('show').siblings('li').removeClass('show');
			// 显示数字
		$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
	})
	}).mouseout(function(){
		autorun();
	})
})