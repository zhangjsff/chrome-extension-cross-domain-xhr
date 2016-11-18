//This line opens up a long-lived connection to your background page.
//
var id = document.createElement('div');
id.setAttribute('id', 'chrome-extension-crossxhr-robot');
document.querySelector('body').appendChild(id);

var port = chrome.runtime.connect({name:"mycontentscript"});

port.onMessage.addListener(function(message,sender){

  var event = new CustomEvent('ChromeEventResponse', { 'detail': message });
  document.dispatchEvent(event);
});

document.addEventListener("ChromeEvent", function(data) {
  if(!data.detail){
    console.error('Request Url is needed');
  }
  console.log('request url : ' , data.detail)
  port.postMessage(data.detail);
});
