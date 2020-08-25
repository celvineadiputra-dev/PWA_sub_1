const PageLoad = (page) => {
    const pageNow = page == "" ? "home" : page;
    const root = document.getElementById("root");
    fetch(`Pages/${pageNow}.html`)
        .then((res) => res.text())
        .then((text) => {
            document
                .querySelectorAll(".menunav a, .sidenav a")
                .forEach((elm) => {
                    elm.parentElement.classList.remove("active");
                });
            document.querySelectorAll(`.${pageNow}`).forEach((elm) => {
                elm.parentElement.classList.add("active");
            });
            root.innerHTML = text;
        })
        .catch((e) => (root.innerHTML = "Page Not Found"));
};

export default PageLoad;
