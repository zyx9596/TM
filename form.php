<?php
/*
****************************************************

	url:	form.php?user=用户名&pass=密码
		
	return:	'登陆成功'
			'账号密码不能为空'
			'账号错误'
			'密码错误'

****************************************************
*/
$user=$_GET["user"];
$pass=$_GET["pass"];

if ($user=="zhaoyunxiang"&&$pass=="12345"){
	echo '登陆成功';
}else{
	if ($user==""||$pass=="") {
		echo '账号密码不能为空';
	} else if ($user!="zhaoyunxiang"){
		echo '账号错误,试试输入<zhaoyunxiang>吧！';
	}else if ($pass!="12345"){
		echo '密码错误,试试输入<12345>吧！';
	};
};

?>
