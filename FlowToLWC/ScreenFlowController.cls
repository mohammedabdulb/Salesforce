/*
Created By :- Mohd Abdul Basith
Description :- it is Controller for LWC ar_POPScreenFlowReadOnlyFields
*/
public without Sharing class ScreenFlowController {
    @AuraEnabled
    public Static inventorWrapper getDetails(String oppId){
        accWrapper returnData = new accWrapper();
        List<Account> accList = new List<Account>();
        if(String.isNotEmpty(oppId)){
            accList = [Select Id,name from Account where Id = :oppId];
            if(!accList.isEmpty() && accList != NULL){
                returnData.accountName =  accList[0]?.name;
            } 
        }
        return returnData;
    }
     public class accWrapper{
        @AuraEnabled public String accountName {get;set;}
    }
}
