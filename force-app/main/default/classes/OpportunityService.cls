public with sharing class OpportunityService {
    
    @AuraEnabled(cacheable=true)
    public static Decimal getOpportunitiesByRecordType(Id accountId, Id rtId){
        try {
            return (Decimal) [SELECT SUM(Amount) sumAmount FROM Opportunity WHERE AccountId = :accountId AND RecordTypeId = :rtId][0].get('sumAmount');
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}
