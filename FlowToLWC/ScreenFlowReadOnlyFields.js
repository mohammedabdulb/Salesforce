import { api,track, LightningElement } from 'lwc';
import getInventoryDetails from '@salesforce/apex/ScreenFlowController.getInventoryDetails';

export default class ScreenFlowReadOnlyFields extends LightningElement {
    @api oppId;
    propertyName;
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
            getInventoryDetails({oppId:this.oppId})
        .then(result => {
            if(result.projectname){
                this.propertyName =  result.projectname;
            }
            if(result.accountName){
                this.accountName  =  result.accountName;
            }
            this.error = undefined;
        })
        .catch(error => {
            this.propertyName = undefined;
            this.error = error;

        });
    }
}
