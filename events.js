function redirectToLink() {
    const headerNavList = document.getElementById("header-nav-list").children;

    for (let i = 0; i < headerNavList.length; i++) {
        headerNavList[i].addEventListener("click", () => {
            headerNavList[i].firstChild.click();
        });
    }
}

function stretchGradientHeight() {
    let bodyHeight = document.body.clientHeight.toString() + "px";
    document.documentElement.style.setProperty("--height", bodyHeight);
    window.addEventListener("resize", () => {
        bodyHeight = document.body.clientHeight.toString() + "px";
        document.documentElement.style.setProperty("--height", bodyHeight);
    });
}

redirectToLink();
stretchGradientHeight();
