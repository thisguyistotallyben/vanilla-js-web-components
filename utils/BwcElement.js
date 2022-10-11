import LoadHTML from "./loadHtml.js";

export default class BwcElement extends HTMLElement {
    template = document.createAttribute('template');
    innerHTML = '';

    constructor(templateUrl) {
        console.log('super dee duper', templateUrl);
        console.log(LoadHTML(templateUrl, import.meta.url));
        super();
        this.attachShadow({ mode: 'open'});
        // this.shadowRoot.appendChild(this.template);
    }
}
