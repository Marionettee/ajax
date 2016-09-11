window.onload=function(){
	var xmlhttp;
	var usn=document.getElementById('username');
	var la=document.getElementsByTagName('lable')[0];
	if(XMLHttpRequest){
		xmlhttp=new XMLHttpRequest()
	}else{
		xmlhttp=new ActiveXObject('Microsoft.XMLHTTP')
	}
		xmlhttp.open('GET','user.json',false);
		xmlhttp.send();
		var content=xmlhttp.responseText;
		var obj=JSON.parse(content);
		console.log(obj[0].username);
	usn.onblur=function(){
		for(var i=0;i<obj.length;i++){
			if(usn.value==obj[i].username){
				la.innerHTML='用户名已存在';
				break;
			}else{
				la.innerHTML='';
			}
		}
	}
}