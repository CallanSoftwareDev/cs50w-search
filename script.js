function changeThemes() {
    const checkbox = document.getElementById("themes");
    const stylesheet = document.getElementById("css");
    const glogof = document.getElementById("glogofull")
    const glogos = document.getElementById("glogo")
    const icon = document.getElementById("tabicon")
    
    if (checkbox.checked) {
        stylesheet.href = "style.css";
        glogof.src = "Images/glogofull.png"
        glogos.src = "Images/glogo.png"
        icon.href = "Images/glogo.png"
    } else {
        stylesheet.href = "style2.css";
        glogof.src = "Images/glogowfull.png"
        glogos.src = "Images/glogow.png"
        icon.href = "Images/glogow.png"
    }
}

function imgThemes() {
    const checkbox = document.getElementById("themes");
    const stylesheet = document.getElementById("css");
    const glogof = document.getElementById("glogofull")
    const glogos = document.getElementById("glogo")
    const icon = document.getElementById("tabicon")
    
    if (checkbox.checked) {
        stylesheet.href = "style.css";
        glogof.src = "Images/glogoimgfull.png"
        glogos.src = "Images/glogo.png"
        icon.href = "Images/glogo.png"
    } else {
        stylesheet.href = "style2.css";
        glogof.src = "Images/glogoimgwfull.png"
        glogos.src = "Images/glogow.png"
        icon.href = "Images/glogow.png"
    }
}

function advThemes() {
    const checkbox = document.getElementById("themes");
    const stylesheet = document.getElementById("css");
    const glogos = document.getElementById("glogo")
    const icon = document.getElementById("tabicon")
    
    if (checkbox.checked) {
        stylesheet.href = "style.css";
        glogos.src = "Images/glogo.png"
        icon.href = "Images/glogo.png"
    } else {
        stylesheet.href = "style2.css";
        glogos.src = "Images/glogow.png"
        icon.href = "Images/glogow.png"
    }
}