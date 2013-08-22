function loadCss(style_url) {
    var style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("type", "text/css")
    style.setAttribute("href", style_url)
    document.getElementsByTagName("head")[0].appendChild(style)
}

loadCss("http://127.0.0.1:8000/css/iframe.css?cb=" + Math.random());

var iframe = document.createElement('iframe');
iframe.src = "http://127.0.0.1:8000/iframe.html";
iframe.id = "stagirite_iframe";
document.body.addEventListener("click", function() {
  iframe.className = "hide";
});

document.body.appendChild(iframe);

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  if (e.data.event == "loaded") {
    iframe.className = "show";
  } else if (e.data.event == "close") {
    iframe.className = "hide";
  }
},false);


