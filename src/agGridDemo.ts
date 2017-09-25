import { IDataSetConfiguration } from './IDataSetConfiguration';
import { AvailableDatasetConfigs } from './DatasetConfigsagGrid';
import { IAdaptableBlotterOptions, IAdaptableBlotter } from '../node_modules/adaptableblotter/App_Scripts/Core/Interface/IAdaptableBlotter';
import { IDemo } from './IDemo';
import * as Helper from './Helper';
import { GridOptions } from "ag-grid"
import { Grid } from 'ag-grid/main';

export class agGridDemo implements IDemo {
    private themeName = "";
    private adaptableblotter: IAdaptableBlotter
    private grid: any
    constructor(private gridContainer: string, private blotterContainer: string) {
        let selectedConfig = Helper.manageDomDataSetSelectAndReturnSelectDataset(AvailableDatasetConfigs)
        if (!selectedConfig) { return }
        let data: any[]
        Helper.getDataFromJson(selectedConfig.name.replace(/ /g, "") + ".json").then(json => data = json)
            .then(data => selectedConfig.manipulateInitialData(data)).then(() => {
                // let the grid know which columns and what data to use
                var gridOptions: GridOptions = {
                    columnDefs: selectedConfig.getSchema(data),
                    rowData: data,
                    enableSorting: true,
                    enableRangeSelection: true,
                    enableFilter: true,
                    onGridReady: function () {
                        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
                        //visible and won't be autosized
                        gridOptions.columnApi.autoSizeAllColumns();
                        setTimeout(() => gridOptions.columnApi.autoSizeAllColumns(), 1);


                        gridOptions.api.addEventListener("newColumnsLoaded", function (params: any) {
                            gridOptions.columnApi.autoSizeAllColumns();
                        });
                    }
                };
                var eGridDiv = document.getElementById(gridContainer);
                var grid = new Grid(eGridDiv, gridOptions);

                selectedConfig.tickData(this.grid);
                //set all the properties such as editor etc....
                selectedConfig.setGridProperties(this.grid)

                //create Adaptable Blotter
                var container = document.getElementById(blotterContainer);
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: selectedConfig.primaryKey,
                    userName: "Jonathan",
                    enableAuditLog: false,
                    enableRemoteConfigServer: false,
                    blotterId: selectedConfig.name,
                    maxColumnValueItemsDisplayed: 1000,
                    predefinedConfigUrl : selectedConfig.name.replace(/ /g, "") + "Config.json"
                }
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(gridOptions, container, eGridDiv, blotterOptions);

                //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
                this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });

            })
    }


    public ThemeChange() {
        if (this.themeName != this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
            this.themeName = this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
            var container = document.getElementById(this.gridContainer)
            if (this.themeName == "Slate" || this.themeName == "Cyborg" || this.themeName == "Darkly" || this.themeName == "Superhero") {
                container.className = "ag-dark";
            }
            else {
                container.className = "ag-blue";
            }
        }
    }
}