// By default class logic gets executed in system context if with sharing key word is not mentioned.
// with sharing , without sharing key word enforces the logic execution in the respective context.
// Trigger runs in system mode until class contains without sharing.
// future method runs in the context of the class with which it got invoked.
// if class is specified without sharing it will run in without sharing mode.
// The batch class runs in the context of the user who scheduled it.


![image](https://github.com/mohammedabdulb/Salesforce/assets/71633830/cb3b5ac3-c391-4d5a-bca4-585825bea3ad)Read this file
Important Frequently Used Code.
Searching the in01 or in02 from the given string.
1) in 02-2,794.16, in03- 4,210.40 // SEARCH("in",A1) ---------> Output is the Number givnig starting position which is -1.
2) RIGHT(A1,LEN(A1)-SEARCH("in",A1)+1) -------------> this will return whole string after that position.
3) LEFT(keep above string here ,5)  --------------> in this by keeping the above string , we are triming till first 5 digits of the String.

**Apex Output to Flow**
****Note :- For using apex in the flows we hvae to use List of List Every time.**
List<List<String>> this should be return of the apex Class

**JAvascript Object Notation** :- 

 @track postDatedChequeObjValidation={   
     checkNumberFlag:true, // Bolean
     CheckNumList: [], // Array or List 
     customerBankFlag:true,
     customerBankList: [],
     remittanceBankFlag:true,
     remittanceBankList: []
    };   


**Null Check in LWC** 
First it should be defined then this value should not be null with respect to obj and shouldn't be empty String. 
if(eachsPDCItem.Name_On_Cheque__c && (eachsPDCItem.Name_On_Cheque__c !== null && eachsPDCItem.Name_On_Cheque__c !== ''))


**Async Await Concept**:-
async function showServiceCost(){
   let User = await getUser(100);
   let services = await getServices(user);
   let cost = await getServiceCost(services)
   console.log(`The Service cost is ${cost}`);
}

example :- 
getUser(100)
.then(getServices)
.then(getServiceCost)
.then(result=>console.log(result))




Unique ID Generation Example in Salesforce:-
[3:05 PM] Abhimanyu Raut
https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_class_System_UUID.htm
<img width="359" alt="image" src="https://github.com/mohammedabdulb/Salesforce/assets/71633830/8f9c6739-09e6-4a69-80cd-edf31349d495">
