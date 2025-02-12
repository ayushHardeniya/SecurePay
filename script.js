function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

function openTab(evt, tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    let tabLinks = document.getElementsByClassName("tab-link");
    for (let link of tabLinks) {
        link.classList.remove("active");
    }
    evt.currentTarget.classList.add("active");
}

function downloadQR() {
    let link = document.createElement("a");
    link.href = "qr-code.png";
    link.download = "NexPay-QR.png";
    link.click();
}
