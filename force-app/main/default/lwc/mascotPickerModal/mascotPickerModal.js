import { api } from "lwc";
import LightningModal from "lightning/modal";

export default class MascotPickerModal extends LightningModal {
    @api mascots;
    selectedMascot;

    handleSelect(event) {
        this.selectedMascot = event.detail;
    }

    handleConfirm() {
        this.close(this.selectedMascot);
    }
}
