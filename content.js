//alert("hello");
//var ele=document.getElementsByClassName("note_date")[0];

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if(request.message=="clicked"){
		console.log("clicked");
	}
});
