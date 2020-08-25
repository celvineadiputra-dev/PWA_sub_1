import PageLoad from "../Js/Helper/PageLoad.js";
import componentLoad from "../Js/Helper/ComponentLoad.js";
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    let page = window.location.hash.substr(1);
    componentLoad("menu");
    PageLoad(page);
});
