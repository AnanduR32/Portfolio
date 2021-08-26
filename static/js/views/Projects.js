import AbstractView from "./AbstractView.js";

export default class  extends AbstractView {
    async getHTML(){
        return `<section class="section-projects">
        <div class="section-projects-content">
            <div class="section-projects-content-block">
                <h4>OduKomban (Bus Infrastructure Automation)</h4>
                <ul>
                    <li>
                        <a href="https://github.com/Stormers-one/passenger_app">
                            Passenger app (Flutter)
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Stormers-one/driver_conductor_app">
                            Driver app (Flutter)
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Stormers-one/website-o_k">
                            Operator Website (Angular)
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Stormers-one">
                            Project Organisation - Stormers-one
                        </a>
                    </li>
                </ul>
            </div>
            <div class="section-projects-content-block">
                <h4>MeatPoint (E-commerce)</h4>
                <ul>
                    <li>
                        <a href="https://github.com/Stormers-one/meat-point">
                            Customer app (Flutter)
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Stormers-one/meat-point">
                            Vendor app (Flutter)
                        </a>
                    </li>
                </ul>
            </div>
            <div class="section-projects-content-block">
                <h4>Datascience Projects</h4>
                <ul>
                    <li>
                        <a href="https://house-price-ar32.herokuapp.com/">
                            House Price Prediction app (Flask-Dash)
                        </a>
                    </li>
                    <li>
                        <a href="https://text-predict-ar32.herokuapp.com/">
                            Text Prediction app (Flask-Dash)
                        </a>
                    </li>
                </ul>
            </div>
            <div class="section-projects-content-block">
                <h4>Datascience reports/analysis</h4>
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
