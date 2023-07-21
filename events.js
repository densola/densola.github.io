function redirectToLink() {
    const headerNavList = document.getElementById("header-nav-list").children;

    for (let i = 0; i < headerNavList.length; i++) {
        headerNavList[i].addEventListener("click", () => {
            headerNavList[i].firstChild.click();
        });
    }
}
redirectToLink()
