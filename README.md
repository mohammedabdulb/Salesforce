![image](https://github.com/mohammedabdulb/Salesforce/assets/71633830/cb3b5ac3-c391-4d5a-bca4-585825bea3ad)Read this file
Important Frequently Used Code.
Searching the in01 or in02 from the given string.
1) in 02-2,794.16, in03- 4,210.40 // SEARCH("in",A1) ---------> Output is the Number givnig starting position which is -1.
2) RIGHT(A1,LEN(A1)-SEARCH("in",A1)+1) -------------> this will return whole string after that position.
3) LEFT(keep above string here ,5)  --------------> in this by keeping the above string , we are triming till first 5 digits of the String.

JAvascript Object Notation :- 
 @track postDatedChequeObjValidation={  
        checkNumberFlag:true, // Bolean
        CheckNumList: [], // Array or List
        customerBankFlag:true,
        customerBankList: [],
        remittanceBankFlag:true,
        remittanceBankList: []
    };   

