import AbstractView from "./AbstractView.js";

export default class  extends AbstractView {
    async getHTML(){
        return `<section class="section-projects">
        <div class="section-projects-content">
            <div class="section-projects-content-block">
                <h4>Check out my datascience projects</h4>
                <ul>
                    <li>
                        <a href="https://www.kaggle.com/aquaregis32">
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/189_Kaggle-512.png">
                            Kaggle
                        </a>
                    </li>
                    <li>
                        <a href="https://rpubs.com/aquaregis32/">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTOj5Z1YZnSJisLbLFCy-RVV_B4fmB1JGvaA&usqp=CAU">
                            rpubs
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/AnanduR32/Datascience">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg">
                            Github Datascience repo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>`
    }
}
