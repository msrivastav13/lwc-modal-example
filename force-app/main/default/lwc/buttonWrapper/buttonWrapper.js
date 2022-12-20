import { LightningElement } from "lwc";

export default class ButtonWrapper extends LightningElement {
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
