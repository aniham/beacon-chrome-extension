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
    var banner = document.createElement("div");
    banner.setAttribute("id", "beacon_banner");
    banner.style.top = "0px";
    banner.style.width = "100%";
    // banner.style.height = "34px";
    banner.style.padding = "14px";
    banner.style.fontSize = "14px";
    banner.style.fontStyle = "normal";
    banner.style.fontWeight = "400";
    banner.style.display = "flex";
    banner.style.alignText = "center";
    banner.style.justifyContent = "center";
    banner.style.backgroundColor = "#1e1e1e";
    banner.style.color = "#b4b4b4";
    banner.style.fontFamily = "adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif";    
    banner.append(document.createTextNode("Project Beacon demo: PHP store -> AEP Edge"));

    const existingBanner = document.getElementById("beacon_banner");
    if (existingBanner) {
        existingBanner.replaceWith(banner);
    } else {
        document.body.insertBefore(banner, document.body.firstChild);
    }
}
