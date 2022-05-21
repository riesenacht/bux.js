import { InputModelFactory } from "./InputModelFactory";
import { BasicInput } from "./model/BasicInput";

console.log("bux.js loaded");

onReady(() => {
    let inputs = document.querySelectorAll("input");
    let inputModels: Array<BasicInput> = [];
    console.log("inputs", inputs);

    inputs.forEach((input) => {
        inputModels.push(InputModelFactory.build(input));
    });
    convertElemens(inputModels);
});

function convertElemens(inputModels: any) {
    inputModels.forEach((inputModel: BasicInput) => {
        let html = inputModel.getNewHtml();
        inputModel.getInitialElement().replaceWith(html);

        onReady(() => {
            inputModel.setListeners();
        });
    });
}

function onReady(fn: EventListener) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
        return;
    }
    document.addEventListener("DOMContentLoaded", fn);
}