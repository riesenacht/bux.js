import { InputModelFactory } from "./InputModelFactory";
import { BasicInput } from "./model/BasicInput";

console.log("bux.js loading...");

onReady(() => {
    let inputs = document.querySelectorAll("input");
    let inputModels: Array<BasicInput> = [];
    
    inputs.forEach((input) => {
        inputModels.push(InputModelFactory.build(input));
    });
    convertElemens(inputModels);

    console.log("bux.js loaded");
});

function convertElemens(inputModels: any) {
    inputModels.forEach((inputModel: BasicInput) => {
        let htmlElement = inputModel.getNewHtml();
        
        // Only decorate bux.js-elements in dev mode
        if(Object.getOwnPropertyDescriptor(window, 'BUXJS_DEV')?.value === true && htmlElement !== inputModel.getInitialElement()) {
            decorate(htmlElement);
        }
        
        inputModel.getInitialElement().replaceWith(htmlElement);

        onReady(() => {
            inputModel.setListeners();
        });
    });
}

function decorate(element: HTMLElement) {
    element.classList.add("bux.js");
}

function onReady(fn: EventListener) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
        return;
    }
    document.addEventListener("DOMContentLoaded", fn);
}