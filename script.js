	var string="<tr><th>Date</th><th>Auth</th><th>Content</th></tr>";
	document.getElementById("test").innerHTML="this is changed again";
	$("#test").append("changed again");
	$.getJSON("./notice.json",function(data){
		//console.log(data);
		for(var i=0;i<9;i++)
		{
			string+="<tr><td>"+data[i.toString()]["date"]+"</td><td>"+data[i.toString()]["source"]+"</td><td>"+data[i.toString()]["subject"]+"</td></tr>";
		}
		console.log(string);
		console.log("appending");
		document.getElementById("notice").innerHTML=string;
		//chrome.browserAction.setPopup({popup: "popup.html"});
		//var views = chrome.extension.getViews({type: 'popup'});
		//console.log("appending");
		//$("#test").append("changed");
		//if(views.length>0)
		//{
		//	console.log("changing");
		//	console.log(views[0])
			//$(views[0].document.body).html("changed");
		//	views[0].document.body.innerHTML="changed";
			//$("#notice").append(string);
	//	}

	});
		//$(".notice").css("border","1px solid black");


	
