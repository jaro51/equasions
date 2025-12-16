function openLinea() {
    document.getElementById("linea").style.zIndex = "2";
}

function openKvadr() {
    document.getElementById("kvadr").style.zIndex = "2";
}

function closeAll() {
    document.getElementById("box").style.zIndex = "0";
    document.getElementById("kvadr").style.zIndex = "0";
    document.getElementById("linea").style.zIndex = "0";    
}