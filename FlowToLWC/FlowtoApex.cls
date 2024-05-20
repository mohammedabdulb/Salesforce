/* 
Name - ExampleCls 
Created by :- Mohd Abdul Basith
Description - This class acts as a controller for  Flows 
Test Class - xyz
*/
public without sharing class ExampleCls{
    public static boolean RecursiveFlag = True; // recursive flag so that it wont get invoked again.
    public class FlowInputs{
        @InvocableVariable
        public Account acc;
    }

    @InvocableMethod
    public static void updateContactRecord(List<FlowInputs> inputFlowList){
        Set<Id> accIds = new  Set<Id>();
        try{
            if(RecursiveFlag == True){
                RecursiveFlag = False;
                for(FlowInputs eachInputFlow: inputFlowList){
                    if(eachInputFlow.acc !=null){
                        accIds.add(eachInputFlow.acc);
                    }
                }
        }catch(Exception ex){
            System.debug('~~~~~~~~~~~');
        }

    }
}
