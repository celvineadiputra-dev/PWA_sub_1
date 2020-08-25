import PageLoad from "../Helper/PageLoad.js";
const componentLoad = (component) => {
    fetch(`Components/${component}.html`)
        .then((res) => res.text())
        .then((text) => {
            document.querySelectorAll(".menunav, .sidenav").forEach((elm) => {
                elm.insertAdjacentHTML("beforeend", text);
            });
            document
                .querySelectorAll(".menunav a, .sidenav a")
                .forEach((elm) => {
                    elm.addEventListener("click", (e) => {
                        e.target.parentElement.classList.add("active");
                        let page = e.target.getAttribute("href").substr(1);
                        PageLoad(page);
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();
                    });
                });
        })
        .catch((e) => console.log(e));
};

export default componentLoad;
