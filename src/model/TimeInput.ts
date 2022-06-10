import { BasicInput } from "./BasicInput";

export class TimeInput extends BasicInput {
    private output: HTMLDivElement = document.createElement("div");
    private timer: NodeJS.Timer | undefined;
    private currentNumber: number = 0;
    private hours: number = 0;
    private minutes: number = 0;
    private currentIndex: number = 0;

    getNewHtml(): HTMLElement {
        let div = document.createElement("div");

        let timeDiv = document.createElement("div");
        timeDiv.textContent = "0";

        let timerButton = document.createElement("button");
        timerButton.textContent = "Start";
        timerButton.addEventListener("click", (event: Event) => {
            event.preventDefault();

            if(this.timer == undefined) {
                if(this.currentIndex == 2) {
                    this.currentIndex = 0;
                    this.hours = 0;
                    this.minutes = 0;
                    this.updateOutput();
                }
                
                this.currentNumber = 0;
                this.timer = setInterval(() => {
                    this.currentNumber++;
                    if(this.currentIndex == 0 && this.currentNumber == 24) {
                        this.currentNumber = 0;
                    }
                    if(this.currentIndex == 1 && this.currentNumber == 60) {
                        this.currentNumber = 0;
                    }

                    timeDiv.textContent = "" + this.currentNumber;
                }, 100);
                timerButton.textContent = "Stop";
            }else {
                clearInterval(this.timer);
                this.timer = undefined;
                timerButton.textContent = "Start";

                switch(this.currentIndex) {
                    case 0:
                        this.hours = this.currentNumber;
                        break;
                    case 1:
                        this.minutes = this.currentNumber;
                        break;
                }

                this.currentIndex++;
                if(this.currentIndex == 2) {
                    timerButton.textContent = "Restart";
                }

                this.updateOutput();
            }
        });


        div.append(timeDiv);
        div.append(timerButton);
        div.append(this.output);

        this.updateOutput();

        return div;
    }

    updateOutput() {
        this.output.textContent = `${this.hours < 10 ? "0" : ""}${this.hours}:${this.minutes < 10 ? "0" : ""}${this.minutes}`;
    }
}