import { BasicInput } from "./BasicInput";

export class NumberInput extends BasicInput {
    private output: HTMLInputElement = document.createElement("input");

    getNewHtml(): HTMLElement {
        this.output.readOnly = true;
        this.output.placeholder = this.getInitialElement().placeholder;
        this.output.name = this.getInitialElement().name;
        this.output.min = this.getInitialElement().min;
        this.output.max = this.getInitialElement().max;
        this.output.step = this.getInitialElement().step;

        let div = document.createElement("div");

        let numberGeneratorButton = document.createElement("button");
        numberGeneratorButton.textContent = "Get the next number";
        numberGeneratorButton.addEventListener("click", (event: Event) => {
            event.preventDefault();

            let min = this.getElement().min != "" ? parseFloat(this.getElement().min) : 0;
            let max = this.getElement().max != "" ? parseFloat(this.getElement().max) : 10;
            let step = this.getElement().step != "" ? parseFloat(this.getElement().step) : 1;
            
            this.output.value = "" + this.generateNumber(min, max, step);
        });
        
        this.setElement(this.output);

        this.output.classList.add("html-input-output");

        div.append(this.output);
        div.append(numberGeneratorButton);
        this.getElement().value = this.getElement().min;
     
        return div;
    }

    generateNumber(min: number, max: number, step: number) {
        let num = Math.floor(Math.random() * (max/step - min/step + 1) + min/step) * step;
        return num.toFixed(this.findAmountOfDecimalPlaces(step));
    }

    findAmountOfDecimalPlaces(x: number) {
        let ratio = 1/x;
        let count = 0;

        while(ratio > 1) {
            ratio = ratio / 10;
            count++;
        }
        return count;
    }
}