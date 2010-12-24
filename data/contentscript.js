window.addEventListener("focus", function() {
  postMessage("focus");
}, false);
window.addEventListener("blur", function() {
  postMessage("blur");
}, false);