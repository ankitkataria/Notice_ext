chrome.browserAction.onClicked.addListner(function(tab)){
	chrome.tabs.query({active:true,currentWindow:true},function(tabs){
		var activeTab=tabs[0];
		chrome.tabs.sendMessage(activeTab.id,{"message":"clicked"});
	});
}