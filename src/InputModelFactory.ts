import { BasicInput } from "./model/BasicInput";
import { PhoneInput } from "./model/PhoneInput";
import { TimeInput } from "./model/TimeInput";

export class InputModelFactory {
    static build(inputElem: HTMLInputElement) {
        switch(inputElem.type) {
            case "tel": 
                return new PhoneInput(inputElem);
            case "time":
                return new TimeInput(inputElem);
            default:
                return new BasicInput(inputElem);
        }
    }
}