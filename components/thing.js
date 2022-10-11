import BwcElement from "../utils/BwcElement.js";

export default class Thing extends BwcElement {
    constructor() {
        super();
        this.innerHTML = '<div>HELLO WORLD</div>';
    }
}