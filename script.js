
//alert("working");
$(document).ready(function(){
	var string="<tr><th>Date</th><th>Auth</th><th>Content</th></tr>";
	$.getJSON("./notice.json",function(data){
		//console.log(data);
		for(var i=0;i<9;i++)
		{
			string+="<tr><td>"+data[i.toString()]["date"]+"</td><td>"+data[i.toString()]["source"]+"</td><td>"+data[i.toString()]["subject"]+"</td></tr>";
		}
		console.log(string);
		console.log("appending");
		//chrome.browserAction.setPopup({popup: "popup.html"});
		var views = chrome.extension.getViews({type: 'popup'});
		//console.log("appending");
		$("#test").append("changed");
		if(views.length>0)
		{
			console.log("changing");
			console.log(views[0])
			//$(views[0].document.body).html("changed");
			views[0].document.body.innerHTML="changed";
			//$("#notice").append(string);
		}

	});
		//$(".notice").css("border","1px solid black");

});
	
