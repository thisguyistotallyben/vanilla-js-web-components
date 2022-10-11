import BwcElement from "../utils/BwcElement.js";

export default class Thing extends BwcElement {
    constructor() {
        this.innerHTML = '<div>HELLO WORLD</div>';
        super();
    }
}