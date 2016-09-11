$(function(){
	$.ajax('user.json',{
		dataType:'json',
		type:"get",
		async:true,
		success:function(o){
			for(var i=0;i<o.length;i++){
				var hh=o[i].username
				$('#user').append('<p>'+hh+'<p>')
			}
		}
	});
	$.ajax('shangpin.json',{
		dataType:'json',
		type:"get",
		async:true,
		success:function(o){
			for(var i=0;i<o.length;i++){
				var hh=o[i].name
				$('#shangpin').append('<p>'+hh+'<p>')
			}
		}
	});
	$.ajax('news.xml',{
		dataType:'xml',
		type:"get",
		async:true,
		success:function(o){
			var a=o.childNodes[0].childNodes[0].childNodes.length
			
			for(var i=0;i<a;i++){
				
				var hh=o.childNodes[0].childNodes[0].childNodes[i].childNodes[0].nodeValue
				
				$('#news').append('<p>'+hh+'<p>')
			}
		}
	});
})