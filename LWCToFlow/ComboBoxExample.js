import { api,track, LightningElement } from 'lwc';
import getUniquePDCsAcknowledgemen from '@salesforce/apex/ar_GeneratePDCAcknowledgementFlowHelper.getUniquePDCsAcknowledgementNumbers';
export default class Ar_GeneratePDCAcknowledgementLWC extends LightningElement {
    @api oppId;
    @track  options =[];
    value;
    error;
    @api outputToFlow;
    connectedCallback() {
        console.log('~~~~~~~',this.oppId);
        this.handleLoad();
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.outputToFlow = this.value;
        console.log('~~~this.outputToFlow~~~~',this.outputToFlow);
    }
    handleLoad() {
        this.showData = true;
        getUniquePDCsAcknowledgemen({oppId:this.oppId})
        .then(result => {
            var optionList = [];
            result.forEach(element => {
                    const option = {
                        label: element,
                        value: element
                    };
                optionList.push(option);
            });
            this.options = optionList;
            console.log('~~~this.options ~~~~',this.options);
            this.error = undefined;
        })
        .catch(error => {
            console.log('~~~this.error ~~~~'+error); 
            this.options = undefined;
            this.error = error;

        });
    }
}
