function darkMode() {
    const dark = "background: black;";
    const light = "background: white;";
    if(document.getElementsByTagName("body")[0].style == dark) {
        document.getElementsByTagName("body")[0].style == light;
        document.getElementsByClassName("themebutton").value = "Light Mode"
    } else {
        document.getElementsByTagName("body")[0].style == dark;
        document.getElementsByClassName("themebutton").value = "Dark Mode"
    };
}