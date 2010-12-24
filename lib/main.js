let self = require("self");
let xpcom = require("xpcom");
let {Cc,Ci} = require("chrome");
require("page-mod").PageMod({
  include: "*",
  contentScriptWhen: "ready",
  contentScriptFile: self.data.url("contentscript.js"),
  onAttach: function(worker) {
    worker.on("message", function(msg) {
      var gPrefService = Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefBranch);
      if (msg === "focus") {
        gPrefService.setBoolPref("browser.tabs.loadDivertedInBackground", false);
      } else {
        gPrefService.setBoolPref("browser.tabs.loadDivertedInBackground", true);
      }
    });
  }
});