import AbstractView from "./AbstractView.js";

export default class  extends AbstractView {
    constructor(){
        super()
        this.setTitle("About")
    }
    async getHTML(){
        return `<section class="section-about">
        <div class="section-about-content">
        <div class="section-about-content-block">
        <h4>About me</h4>
        <ul>
            <li>👾 A technology enthusiast that has answers to it all. </li>
            <li>🦈 Check out my portfolio website - <a
                    href="https://anandur32.github.io/Resume32R/">Resume32R</a>
            </li>
            <li>📚 Read some of my <a href="https://aquaregis32.medium.com/">medium</a> posts </li>
            <li>📫 Reach out to me on <a href="https://twitter.com/AquaRegis32">Twitter</a> or <a
                    href="https://www.linkedin.com/in/anandur32/">LinkedIn</a>, let's talk business</li>
        </ul>
    </div>
    </div>
    <div class="section-about-block">
            Spent most of my life around computers and other electronic devices, greatly fascinated by
            innovations and breakthroughs in technology and would like to surround myself without people
            who share the same passion as I do towards science and technology.
        </div>
        <div class="section-about-block">
            In love with developing visually clean appealing minimalistic content for the enduser.
        </div>
    </section>`
    }
}
