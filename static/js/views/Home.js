import AbstractView from "./AbstractView.js";

export default class  extends AbstractView {
    async getHTML(){
        return `<div class="section-home-header">
        <h3>🤺 Datascientist | UI/UX Designer | Android Developer 🦉</h3>
        <h4><i>Deciphering the singularity</i></h4>
    </div>`
    }
}
