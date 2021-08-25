import AbstractView from "./AbstractView.js";

export default class  extends AbstractView {
    async getHTML(){
        return `<section class="section-qualifications">
        <div class="section-qualifications-block">
        Nothing here to see.... <br>Not that I don't have any qualification, just too lazy add them right now in a clean way! 👾.
        <br>
        <br>
        Well basically my two most important achievements are:
        <ul>
        <li>Google Associate Cloud Engineer</li>
        <li>IBM Advanced Certification in Datascience</li>
        </ul>
        <br>
        Come back later for more 
    </div>
        </section>`
    }
}
