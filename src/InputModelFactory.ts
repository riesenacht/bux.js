import { BasicInput } from "./model/BasicInput";
import { PhoneInput } from "./model/PhoneInput";

export class InputModelFactory {
    static build(inputElem: HTMLInputElement) {
        switch(inputElem.type) {
            case "tel": 
                return new PhoneInput(inputElem);
            default:
                return new BasicInput(inputElem);
        }
    }
}