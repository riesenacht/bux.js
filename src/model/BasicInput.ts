export class BasicInput {
    private element: HTMLInputElement;
    private initialElement: HTMLInputElement;

    constructor(initialInputElement: HTMLInputElement) {
        this.initialElement = initialInputElement;
        this.element = initialInputElement;
    }

    getNewHtml(): HTMLElement {
        return this.element;
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