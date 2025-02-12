function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

function openTab(event, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.style.display = "none";
    }
    
    let buttons = document.getElementsByClassName("tab-button");
    for (let button of buttons) {
        button.classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

function downloadQR() {
    let link = document.createElement('a');
    link.href = 'GooglePayQR.png';
    link.download = 'GooglePayQR.png';
    link.click();
}
