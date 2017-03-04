$(document).ready(function(){

	var string="";
	$.getJSON("notice.json",function(data){
		//console.log(data);
		for(var i=0;i<9;i++)
		{
			string+="<tr><td>"+data[i.toString()]["date"]+"</td><td>"+data[i.toString()]["source"]+"</td><td>"+data[i.toString()]["subject"]+"</td></tr>";
		}
		console.log(string);
		$(".notice").append(string);
	});
});