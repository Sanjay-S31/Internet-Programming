var cn_modal = document.getElementById("myModal");
for(let i=0;i<document.getElementsByClassName("cn-btn").length;i++){
    var btn = document.getElementsByClassName("cn-btn")[i];
    btn.onclick = function() {
        cn_modal.style.display = "block";
    }
}
var ip_modal = document.getElementById("ipModal");
for(let i=0;i<document.getElementsByClassName("ip-btn").length;i++){
    var btn = document.getElementsByClassName("ip-btn")[i];
    btn.onclick = function() {
        ip_modal.style.display = "block";
    }
}
var hci_modal = document.getElementById("hciModal");
for(let i=0;i<document.getElementsByClassName("hci-btn").length;i++){
    var btn = document.getElementsByClassName("hci-btn")[i];
    btn.onclick = function() {
        hci_modal.style.display = "block";
    }
}
var poai_modal = document.getElementById("poaiModal");
for(let i=0;i<document.getElementsByClassName("poai-btn").length;i++){
    var btn = document.getElementsByClassName("poai-btn")[i];
    btn.onclick = function() {
        poai_modal.style.display = "block";
    }
}
var toc_modal = document.getElementById("tocModal");
for(let i=0;i<document.getElementsByClassName("toc-btn").length;i++){
    var btn = document.getElementsByClassName("toc-btn")[i];
    btn.onclick = function() {
        toc_modal.style.display = "block";
    }
}
var rpa_modal = document.getElementById("rpaModal");
for(let i=0;i<document.getElementsByClassName("rpa-btn").length;i++){
    var btn = document.getElementsByClassName("rpa-btn")[i];
    btn.onclick = function() {
        rpa_modal.style.display = "block";
    }
}
for(let i=0;i<document.getElementsByClassName("close").length;i++){
    var span = document.getElementsByClassName("close")[i];
    span.onclick = function() {
        cn_modal.style.display = "none";
        hci_modal.style.display = "none";
        ip_modal.style.display = "none";
        poai_modal.style.display = "none";
        toc_modal.style.display = "none";
        rpa_modal.style.display = "none";
    }
}
window.onclick = function(event) {
if(event.target == cn_modal )
    cn_modal.style.display = "none";
if(event.target == hci_modal )
    hci_modal.style.display = "none";
if(event.target == ip_modal )
    ip_modal.style.display = "none";
if(event.target == poai_modal )
    poai_modal.style.display = "none";
if(event.target == toc_modal )
    toc_modal.style.display = "none";
if(event.target == rpa_modal )
    rpa_modal.style.display = "none";
}