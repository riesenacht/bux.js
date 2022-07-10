export class BasicInput {
    private element: HTMLInputElement;
    private initialElement: HTMLInputElement;

    constructor(initialInputElement: HTMLInputElement) {
        this.initialElement = initialInputElement;
        this.element = initialInputElement;
    }

    getNewHtml(): HTMLElement {
        let div = document.createElement("div");
        div.innerHTML = "Replaced " + this.element.outerHTML;
        return div;
    }

    getInitialElement() {
        return this.initialElement;
    }

    protected getElement() {
        return this.element;
    }

    protected setElement(newElement: HTMLInputElement) {
        this.element = newElement;
    }

    setListeners() {}
}