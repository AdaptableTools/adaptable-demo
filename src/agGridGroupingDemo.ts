import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridGroupingDemo {
    private adaptableblotter: IAdaptableBlotter
    constructor() {
        let data: any[]
        Helper.getDataFromJson("NorthwindOrders.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                 // let the grid know which columns and what data to use
                var gridOptions: GridOptions = {
                    columnDefs: HelperAgGrid.getGroupingNorthwindColumnSchema(),
                    rowData: data,
                    animateRows: true,
                    enableRangeSelection: true,
                    groupMultiAutoColumn: false, // setting it to false until we fix issue: 209
                    groupUseEntireRow: false,
                    floatingFilter: true,
                    onGridReady: function () {
                        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
                        //visible and won't be autosized
                        gridOptions.columnApi.autoSizeAllColumns();
                        setTimeout(() => gridOptions.columnApi.autoSizeAllColumns(), 1);

                        gridOptions.api.addEventListener("cellEditingStopped", () => {
                        });

                        gridOptions.api.addEventListener("newColumnsLoaded", function () {
                            gridOptions.columnApi.autoSizeAllColumns();
                        });
                    }
                };
                var eGridDiv = document.getElementById("grid");
                new Grid(eGridDiv, gridOptions);

                let config: any = "NorthwindOrdersConfig.json";

                //create Adaptable Blotter
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: "OrderId",
                    vendorGrid: gridOptions,
                    userName: "Jonathan",
                    blotterId: "Northwind Grouping",
                    licenceKey: Helper.getdemolicencekey(),

                }
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);

            })
    }

}
