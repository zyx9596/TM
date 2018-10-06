function ajax(url, fnSucc, fnFaild){
	if(window.XMLHttpRequest){//1.创建XMLHttpRequest对象
		var xhr=new XMLHttpRequest();//非IE56
	}else{
		var xhr=new ActiveXObject("Microsoft.XMLHTTP");//IE56
	}
	xhr.open('get', url, true);//2.连接服务器
	xhr.send();//3.发送
	xhr.onreadystatechange=function (){//4.接收
		if(xhr.readyState==4){ // 请求已完成
			if(xhr.status==200){ // OK
				fnSucc(xhr.responseText);//请求成功函数返回数据
			}else{ 
				if(fnFaild){
					fnFaild();//执行请求失败函数
				}else{
					alert('错误'+xhr.status);//弹出失败状态
				};
			};
		};
	};
};