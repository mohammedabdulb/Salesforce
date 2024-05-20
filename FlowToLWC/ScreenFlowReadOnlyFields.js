import { api,track, LightningElement } from 'lwc';
import getDetails from '@salesforce/apex/ScreenFlowController.getDetails';

export default class ScreenFlowReadOnlyFields extends LightningElement {
    @api oppId;
    accountName;
    error;
    showData = false;
    connectedCallback() {
         if (!this.oppId) {
            this.oppId = localStorage.getItem("oppId");
         }else{
            localStorage.setItem("oppId", this.oppId);
        }
        this.handleLoad();
    }
    handleLoad() {
        this.showData = true;
            getDetails({oppId:this.oppId})
        .then(result => {
            if(result.accountName){
                this.accountName  =  result.accountName;
            }
            this.error = undefined;
        })
        .catch(error => {
            this.accountName = undefined;
            this.error = error;

        });
    }
}
