// 轮播图
$(function(){
	// 定义下标
	var m = 0;
	function automove(){
		time = setInterval(function(){
			m++;
			// 判断下标
			if(m>5){
				m = 0;
			}
			$('.pic_list li').eq(m).fadeIn().siblings('li')
			.hide();
			$('.num li').eq(m).addClass('show').siblings('li')
			.removeClass('show');
			// 判断下标
			if(m<0){
				m = 5;
				$('.pic_list li').eq(m).fadeIn().siblings('li')
				.hide();
				$('.num li').eq(m).addClass('show').siblings('li')
				.removeClass('show');
			}
		},3000)
	} 
	automove();
	// 鼠标移入数字显示相应的图片
	$('.outer').mouseenter(function(){
		clearInterval(time);
		$('.num li').mouseover(function(){
			// 保存一个当前的下标
			m = $(this).index();
			$('.pic_list li').eq(m).fadeIn().siblings('li')
			.fadeOut();
			$('.num li').eq(m).addClass('show').siblings('li')
			.removeClass('show');
		})
	}).mouseleave(function(){
		automove();
	})



		// 天猫楼层 s
	// 点击菜单滚动到对应楼层
	// 弹出层
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		//console.log(top);
		if(top>600){
			$('#floor_menu').css({display:'block'}).animate({width:'35px',height:'365px',opacity:'1'},500)
		}else if(top<600){
			$('#floor_menu').css({display:'none'})
		}else if(top>2000){
			$('#floor_menu').css({display:'none'})
		}
	});
	
	$('.floor_menu').click(function(){
		var index = $(this).index()-1;
		// console.log(index)
		var flTop = $('.tm_market').eq(index).offset().top;
		$('html').animate({
			scrollTop:flTop
		},500);
	})
	var heights = [];
	$('.tm_market').each(function(){
		var thisTop = $(this).offset().top-300;
		heights.push(thisTop);
		
	})
	//console.log(heights.length);
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		var index;

		for(var i=0;i<heights.length;i++){
			if(winTop>=heights[i] && winTop<heights[i+1]){
				index = i;
				// console.log(i)
				$('.floor_menu').eq(index).addClass('current').siblings().removeClass('current');
			}else if(winTop>=heights[heights.length-1]){
				index = heights.length;
				$('.floor_menu').eq(7).addClass('current').siblings().removeClass('current');			
			}
		}
	})
	$("#back-top").click(function(){
		$('html').animate({scrollTop:0},500);
	})
	// 天猫楼层 e
	

	//二级联动菜单
	function cllb(dhid){
		var oDh = document.getElementById(dhid);	
		var aDdd = oDh.children;
		for (var i=1;i<aDdd.length;i++) {
			aDdd[i].ind = i;						
			aDdd[i].onmouseenter = function(){		
				var index = this.ind;
				oDiv = aDdd[index].children[1];
				oDiv.style.visibility = "visible";
			} 
			aDdd[i].onmouseleave = function(){
				var index = this.ind;
				oDiv = aDdd[index].children[1];
				oDiv.style.visibility = "hidden";
			}
		}
	}

	cllb("cedh");
})

// 搜索框
$(function(){
	$('.hide_search').hide();
	$(window).scroll(function(){
		var gun = $(window).scrollTop();
		// 来一次判断
		if(gun>=1200){
			$('.hide_search').slideDown(500);
		}else{
			$('.hide_search').slideUp(500);
		}
	})
})

// 封装瀑布流函数
// 
$(function(){

	function add(){
	var floor = $('.floor').height();
	console.log(floor);
	//创建节点
	var LI = $(`<li class="name20">
									<a href="">
											<span><img src="./image/104.jpg" alt=""></span>
										<p>2018款Apple/苹</p>
										<p>果9.7英寸iPad智能</p>
										<p class="price">￥2515.0</p>
									</a>
								</li>
								<li class="name20">
									<a href="">
											<span><img src="./image/106.jpg" alt=""></span>
										<p>科沃斯扫地机器人地</p>
										<p>宝DJ35吸尘器智能家</p>
										<p class="price">￥1899.0</p>
									</a>
								</li>
								<li class="name20">
									<a href="">
											<span><img src="./image/111.jpg" alt=""></span>
										<p>亿健精灵ELF跑步机家</p>
										<p>用款多功能减肥电动</p>
										<p class="price">￥1799.0</p>
									</a>
								</li>
								<li class="name20">
									<a href="">
											<span><img src="./image/112.jpg" alt=""></span>
										<p>Apple原装AirPods</p>
										<p>蓝牙无线耳机iPhone</p>
										<p class="price">￥1068.0</p>
									</a>
								</li>
								<li class="name20">
									<a href="">
											<span><img src="./image/114.jpg" alt=""></span>
										<p>Haier/海尔</p>
										<p>EG10014B39GU1 10</p>
										<p class="price">￥2699.0</p>
									</a>
								</li>`)


	if(floor>0&&floor<5000){
			$('.floor_list').append(LI);
		}

$(document).scroll(function(){
			// 文档上卷高度
			var Wj = $(document).scrollTop();
			// console.log(wscroll);
			// 浏览器窗口高度
			var Wc = $(window).height();
			// console.log(Wh);
			// 文档高度
			var Wd = $('html').height();
			// console.log(Wd);
			// 剩余高度
			var yu = Wd - Wc - Wj;
			console.log(yu);
			if(yu<500){
				add();
			}
			if(Wd>12000){
				$(document).off('scroll');
			}
		})
}
add();

})

