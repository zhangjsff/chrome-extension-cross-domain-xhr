var port = null;

chrome.runtime.onConnect.addListener(function(port){
  // port.postMessage({greeting:"hello"});
  //
  port.onMessage.addListener(function(msg) {
    
    fetch(msg).then(resp => resp.text()).then(resp => {
      port.postMessage(resp)
    })
  })
});

// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
//   alert(message);
//
//   var result = fetch('http://ditu.amap.com/service/poiInfo?query_type=TQUERY&city=&keywords=%E9%BE%99%E5%A4%B4%E5%B1%B1%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD&pagesize=20&pagenum=1&qii=true&cluster_state=5&need_utd=true&utd_sceneid=1000&div=PC1000&addr_poi_merge=true&is_classify=true&geoobj=116.377845%7C39.998782%7C116.388145%7C40.005349').then(resp => resp.json()).then(resp => {
//     console.log('fetch data',resp);
//
//
//     sendResponse(resp);
//     return resp;
//   })
//
//
//
// });
