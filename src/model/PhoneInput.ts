import { BasicInput } from "./BasicInput";

export class PhoneInput extends BasicInput {
    private output: HTMLDivElement = document.createElement("div");

    getNewHtml(): HTMLElement {
        let div = document.createElement("div");

        let subtractButton = document.createElement("button");
        subtractButton.textContent = "-";
        subtractButton.addEventListener("click", (event: Event) => {
            event.preventDefault();

            if(parseInt(phoneInput.value) > parseInt(phoneInput.min)) {
                phoneInput.value = "" + (parseInt(phoneInput.value) - 1);
                this.updateOutput();
            }
        });
        
        let addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.addEventListener("click", (event: Event) => {
            event.preventDefault();

            if(parseInt(phoneInput.value) < parseInt(phoneInput.max)) {
                phoneInput.value = "" + (parseInt(phoneInput.value) + 1);
                this.updateOutput();
            }
        });

        let phoneInput = document.createElement("input");
        phoneInput.classList.add("bux-input");
        phoneInput.type = "range";
        phoneInput.step = "1";
        phoneInput.min = this.getElement().min != "" ? this.getElement().min : "0100000000";
        phoneInput.max = this.getElement().max != "" ? this.getElement().max : "9999999999";
        
        this.setElement(phoneInput);

        this.output.classList.add("html-input-output");

        div.append(subtractButton);
        div.append(phoneInput);
        div.append(addButton);
        div.append(this.output);
        this.getElement().value = this.getElement().min;
        this.updateOutput();

        return div;
    }

    setListeners(): void {
        this.getElement().addEventListener("input", () => {
            this.updateOutput();
        });
    }

    updateOutput() {
        this.output.textContent = this.getElement().value.length < 10 ? "0" + this.getElement().value : this.getElement().value;
    }

    onChange() {

    }
}