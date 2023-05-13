function changeThemes() {
    const checkbox = document.getElementById("themes");
    const stylesheet = document.getElementById("css");
    const glogof = document.getElementById("glogofull")
    const glogos = document.getElementById("glogo")
    const text = document.getElementById("themetext")
    
    if (checkbox.checked) {
        stylesheet.href = "style.css"; // Replace with the new stylesheet href
        glogof.src = "Images/glogofull.png"
        glogos.src = "Images/glogo.png"
        text.innerHTML = "Light Mode"
    } else {
        stylesheet.href = "style2.css"; // Replace with the new stylesheet href
        glogof.src = "Images/glogowfull.png"
        glogos.src = "Images/glogow.png"
        text.innerHTML = "Dark Mode"
    }
}