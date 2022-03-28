let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

chrome.tabs.query(
    {currentWindow: true, active : true},
    function([tab]){
        chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
        });
    }
);
function setPageBackgroundColor() {

        console.log('HELLO');
    var d = document.createElement("div");
    d.style.top = "0px";
    d.style.zIndex = "2147483647";
    d.style.width = "100%";
    d.style.height = "30px";
    d.style.padding = "2px";
    d.style.fontSize = "20px";
    d.style.textAlign = "center";
    d.style.backgroundColor = "#E7F6F9";
    d.style.color = "#6667AB";
    d.style.fontFamily = "adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif";    
    d.append(document.createTextNode("Project Beacon demo: PHP store -> AEP Edge"));
    document.body.insertBefore(d, document.body.firstChild);

}
  