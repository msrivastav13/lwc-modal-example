import { api, LightningElement } from "lwc";

export default class ButtonWrapper extends LightningElement {
    @api
    selectedMascot;
    handleConfirm() {
        this.dispatchEvent(
            new CustomEvent("select", {
                bubbles: true, 
                composed: true,
                detail: {
                    id: this.selectedMascot
                }
            })
        );
    }
}
