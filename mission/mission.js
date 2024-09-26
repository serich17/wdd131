const themeSelector = document.querySelector("select");
themeSelector.addEventListener("change", changeTheme);


function changeTheme() {

    if (themeSelector.value == "dark") {
        document.getElementById("body").classList.add("dark");
        document.getElementById("logo").src = "byui-logo_white.png";
    }
    else if (themeSelector.value == "light") {
        document.getElementById("logo").src = "byui-logo_blue.webp";
        document.getElementById("body").classList.remove("dark");
    }

}


