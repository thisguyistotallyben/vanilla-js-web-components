import loadHTML from "./loadHtml.js";

export default class BwcElement extends HTMLElement {
    template = document.createAttribute('template');
    innerHTML = '';

    constructor(templateUrl) {
        console.log('super dee duper', templateUrl);
        loadHTML(templateUrl, import.meta.url).then((template) => console.log('template', template));
        super();
        this.attachShadow({ mode: 'open'});
        // this.shadowRoot.appendChild(this.template);
    }
}
