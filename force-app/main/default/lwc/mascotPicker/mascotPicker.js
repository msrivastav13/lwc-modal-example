import { LightningElement } from "lwc";
import MascotPickerModal from "c/mascotPickerModal";

export default class MascotPicker extends LightningElement {
    selectedMascot;

    mascots = [
        {
            index: 0,
            name: "Astro",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Astro.png"
        },
        {
            index: 1,
            name: "Cloudy",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrationsCloudy.png"
        },
        {
            index: 2,
            name: "Codey",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Codey.png"
        },
        {
            index: 3,
            name: "Appy",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Appy.png"
        },
        {
            index: 4,
            name: "Einstein",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Einstien.png"
        },
        {
            index: 5,
            name: "Geneie",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2022/09/2022-08-360BlogHeader-MeetGenie1-567x844-2.png"
        },
        {
            index: 6,
            name: "Ruth",
            src: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/12/2021-12-360Blog-2D-IndividualIllustrations-Ruth.png"
        }
    ];

    handleBtnClick() {
        MascotPickerModal.open({
            mascots: this.mascots,
            onselect: (e) => {
                e.stopPropagation();
                this.handleSelectEvent(e.detail);
            }
        }).then((result) => {
            console.log(result);
        });
    }

    handleSelectEvent(detail) {
        this.selectedMascot = detail.selectedMascot;
    }
}
