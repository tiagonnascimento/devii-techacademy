import { LightningElement, api, wire } from 'lwc';
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
import { getObjectInfo } from "lightning/uiObjectInfoApi";

export default class OpptySummary extends LightningElement {
    @api recordId;

    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT } )
    objectInfo;

    get productRTId() {
        if (this.objectInfo.data) {
            // Returns a map of record type Ids 
            const rtis = this.objectInfo.data.recordTypeInfos;
            return Object.keys(rtis).find(rti => rtis[rti].name === 'Product');        
        }
    }

    get serviceRTId() {
        if (this.objectInfo.data) {
            // Returns a map of record type Ids 
            const rtis = this.objectInfo.data.recordTypeInfos;
            return Object.keys(rtis).find(rti => rtis[rti].name === 'Service');        
        }

    }

}