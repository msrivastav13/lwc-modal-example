import { LightningElement, api } from "lwc";

export default class VisualPicker extends LightningElement {
    @api items;

    handleChange(event) {
        const selectEvent = new CustomEvent(
            'select', {
                detail: event.target.value 
        });
        this.dispatchEvent(selectEvent);
    }
}
