
chrome.runtime.onInstalled.addListener(function () {
    chrome.tabs.query(
        {currentWindow: true, active : true},
        function([tab]) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: displayBanner,
            });
        }
    );
});

chrome.tabs.onUpdated.addListener(function () {
    chrome.tabs.query(
        {currentWindow: true, active : true},
        function([tab]) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: displayBanner,
            });
        }
    );
});

function displayBanner() {
    // document.getElementById("my-element").remove();
    var d = document.createElement("div");
    // d.setAttribute("id", "beacon_banner");
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
