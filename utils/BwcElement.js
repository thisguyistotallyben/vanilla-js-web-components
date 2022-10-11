export default class BwcElement extends HTMLElement {
    template = document.createAttribute('template');
    innerHTML = '';

    constructor(element) {
        console.log('super dee duper', element);
        super();
        this.attachShadow({ mode: 'open'});
        // this.shadowRoot.appendChild(this.template);
    }
}
