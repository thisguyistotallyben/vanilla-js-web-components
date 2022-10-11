export default class BwcElement extends HTMLElement {
    template = document.createAttribute('template');
    innerHTML = '';

    constructor() {
        console.log('super dee duper');
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}
