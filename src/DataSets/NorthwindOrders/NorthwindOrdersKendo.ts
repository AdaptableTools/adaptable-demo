import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var NorthwindOrders: IDataSetConfiguration = {
    name: "Northwind Orders",
    primaryKey: "OrderID",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === NorthwindOrders.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" } });
                }
                else {
                    schema.push({ title: Helper.capitalize(p), field: p });
                }
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {

    },
    tickData: (grid: any) => {

    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record:any){
        
    }
}