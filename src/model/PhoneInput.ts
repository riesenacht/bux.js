import { BasicInput } from "./BasicInput";

export class PhoneInput extends BasicInput {
    private output: HTMLDivElement = document.createElement("div");

    getNewHtml(): HTMLElement {
        let div = document.createElement("div");

        let phoneInput = document.createElement("input");
        phoneInput.type = "range";
        phoneInput.min = "1000000000";
        phoneInput.max = "9999999999";
        this.setElement(phoneInput);

        this.output.classList.add("html-input-output");

        div.innerHTML = "New Phone Element: " + phoneInput.outerHTML + this.output.outerHTML;

        return div;
    }

    onChange() {

    }
}