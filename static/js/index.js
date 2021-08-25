import About from "./views/About.js";
import Home from "./views/Home.js";
import Contact from "./views/Contact.js";
import Projects from "./views/Projects.js";
import Qualifications from "./views/Qualifications.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/Resume32R/", view: Home },
        { path: "/Resume32R/About", view: About },
        { path: "/Resume32R/Projects", view: Projects },
        { path: "/Resume32R/Qualifications", view: Qualifications },
        { path: "/Resume32R/Contact", view: Contact }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })
    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector("#app").innerHTML = await view.getHTML()

    // console.log(match.route.view())

}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})