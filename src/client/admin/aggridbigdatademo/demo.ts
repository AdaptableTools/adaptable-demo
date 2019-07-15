import * as Helper from '../../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from 'adaptableblotter/types';

import { HelperAgGrid } from '../../../HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  // let rowData = JSON.parse(JSON.stringify(json));
  // Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getTradeSchema();

  const trades = helperAgGrid.getTrades(100000);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);
  gridOptions.floatingFilter = true;
  gridOptions.statusBar = {
    statusPanels: [
      { statusPanel: 'agTotalRowCountComponent', align: 'left' },
      { statusPanel: 'agFilteredRowCountComponent' },
      // { statusPanel: 'agSelectedRowCountComponent' },
      //  { statusPanel: 'agAggregationComponent' },
    ],
  };

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Big Data Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
    queryOptions: {
      maxColumnValueItemsDisplayed: 1000,
    },
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
