import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Query: {
    CurrentQuery:
      '([ShipCountry] IN ("UK", "USA") AND ENDS_WITH([ShipVia],"s"))  OR [ItemCount] < 5',
    SharedQueries: [
      {
        // Note the Uuid is provided by the developer - the only place in AdapTable config that you need do
        Uuid: 'SharedQuery1-BigChangedOrders',
        Name: 'Big Changed Orders',
        Expression: '[OrderChange] > 10 AND [PackageCost] > 10 ',
      },
      {
        // Note the Uuid is provided by the developer - the only place in AdapTable config that you need do
        Uuid: 'SharedQuery2-NonUPShipping',
        Name: 'Non UP Shipping',
        Expression: '[ShipVia] != "United Package" ',
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          All: true,
        },
        SharedQueryId: 'SharedQuery2-NonUPShipping',
        Style: {
          BackColor: 'orange',
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'QueryLayout',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'CustomerReference',
          'ContactName',
          'ShipCountry',
          'ChangeLastOrder',
          'ShipVia',
          'ItemCount',
          'OrderCost',
          'PackageCost',
          'Employee',
          'CompanyName',
        ],
        ColumnSorts: [
          {
            ColumnId: 'CustomerReference',
            SortOrder: 'Asc',
          },
        ],
        Name: 'QueryLayout',
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Search',
        Toolbars: ['Query'],
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Current Query Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
