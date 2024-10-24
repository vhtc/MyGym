import { nav } from "../components/nav.js";

window.app = app
export function app() {
    let body = document.getElementById('id_body')

    body.innerHTML = nav()
}