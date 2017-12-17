

function getOrders() {
    // return fetch('/html-apps-master/transportation-app/data/addresses.json');
}

function ajaxGet(url) {
    return new Promise(function(resolve, reject) {
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", function() {
            resolve(this.responseText);
          });
          oReq.addEventListener("error", function() {
            reject(this.responseText);
          });
          
          oReq.open("GET", url);
          oReq.send();
    });
}