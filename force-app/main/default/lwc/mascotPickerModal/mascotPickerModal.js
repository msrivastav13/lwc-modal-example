import { api } from "lwc";
import LightningModal from "lightning/modal";

export default class MascotPickerModal extends LightningModal {
    @api mascots;
    selectedMascot;

    handleSelect(event) {
        this.selectedMascot = event.detail;
        console.log(event.detail);
    }

    handleConfirm() {
        this.dispatchEvent(
            new CustomEvent("select", {
                detail: {
                    selectedMascot: this.selectedMascot
                }
            })
        );
        this.close(this.selectedMascot);
    }
}
