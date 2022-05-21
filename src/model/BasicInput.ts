export class BasicInput {
    private element: HTMLInputElement;
    private initialElement: HTMLInputElement;

    constructor(initialInputElement: HTMLInputElement) {
        this.initialElement = initialInputElement;
        this.element = initialInputElement;
    }

    getNewHtml(): HTMLElement {
        let div = document.createElement("div");
        div.textContent = "Replaced '" + this.element.type + "'-Element Here: ";
        div.innerHTML = div.textContent + this.element.outerHTML;
        return div;
    }

    getInitialElement() {
        return this.initialElement;
    }

    getElement() {
        return this.element;
    }

    protected setElement(newElement: HTMLInputElement) {
        this.element = newElement;
    }

    setListeners() {}
}