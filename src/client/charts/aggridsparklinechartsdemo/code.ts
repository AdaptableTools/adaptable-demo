import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import charts from '@adaptabletools/adaptable-plugin-charts';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = ({
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Chart'],
  },
  Chart: {
    CurrentChartName: 'Dollar Change',
    ChartDefinitions: [
      {
        ChartType: 'SparklinesChart',
        Description: 'The Change on Year for Trades where Currency is USD',
        Name: 'Dollar Change',
        VisibleRowsOnly: true,
        ColumnId: 'changeOnYear',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: ['USD'],
              ColumnId: 'currency',
              ColumnRawValues: ['USD'],
            },
          ],
        },
        ChartProperties: {
          DisplayType: 'Column',
        },
      },
    ],
  },
} as any) as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'CoutradeIdntry',
    userName: 'Demo User',
    adaptableId: 'Sparkline Charts Demo',
    chartOptions: {
      displayOnStartUp: true,
      showModal: false,
      pieChartMaxItems: 50,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    plugins: [charts()],
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
