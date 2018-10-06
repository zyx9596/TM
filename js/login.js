// 点击切换登录
$(document).ready(function(){
	$('#form #pic').click(function(){
		$('#form_1').show();
	});

	$('#form_1 #pic1').click(function(){
		$('#form').show();
	});
})

// ajax验证
var user = document.getElementById('user');
// console.log(user);
var pass = document.getElementById('pass');
// console.log(pass);
var denglu = document.getElementById('denglu');
// console.log(denglu);
denglu.onclick = function(){
	ajax('form.php?user='+user.value+'&pass='
        +pass.value+'&t='+new Date().getTime(),function(x){
                alert(x);
        },function(){
            alert('请求失败');
        })
}
