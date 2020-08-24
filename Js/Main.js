document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    let page = window.location.hash.substr(1);

    const PageLoad = (page) => {
        const root = document.getElementById("root");
        fetch(`Pages/${page}.html`)
            .then((res) => res.text())
            .then((text) => {
                document
                    .querySelectorAll(".menunav a, .sidenav a")
                    .forEach((elm) => {
                        elm.parentElement.classList.remove("active");
                    });
                document.querySelectorAll(`.${page}`).forEach((elm) => {
                    elm.parentElement.classList.add("active");
                });
                root.innerHTML = text;
            })
            .catch((e) => (root.innerHTML = "Page Not Found"));
    };

    const componentLoad = (component) => {
        fetch(`Components/${component}.html`)
            .then((res) => res.text())
            .then((text) => {
                document
                    .querySelectorAll(".menunav, .sidenav")
                    .forEach((elm) => {
                        elm.insertAdjacentHTML("beforeend", text);
                    });
                document
                    .querySelectorAll(".menunav a, .sidenav a")
                    .forEach((elm) => {
                        elm.addEventListener("click", (e) => {
                            e.target.parentElement.classList.add("active");
                            page = e.target.getAttribute("href").substr(1);
                            PageLoad(page);
                            var sidenav = document.querySelector(".sidenav");
                            M.Sidenav.getInstance(sidenav).close();
                        });
                    });
            })
            .catch((e) => console.log(e));
    };
    componentLoad("menu");
    PageLoad(page);
});
