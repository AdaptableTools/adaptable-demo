import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, ColDef } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {} as PredefinedConfig;

export default (rowData: any[]) => {
  // lets create the ColumnDefs inline as they are unique to this demo
  const columnDefs: ColDef[] = [
    // here we are using the auto group column by default
    // alternatively you can use Custom Column Group: see https://www.ag-grid.com/javascript-grid-tree-data/#configuring-a-group-column
    {
      field: 'cabinetId',
      filter: true,
      sortable: true,
      cellClass: 'number-cell',
    },
    { field: 'title', filter: true, sortable: true, enableRowGroup: true },
    { field: 'area', filter: true, sortable: true },
    {
      field: 'salary',
      editable: true,
      sortable: true,
      cellClass: 'number-cell',
    },
    {
      field: 'staff',
      aggFunc: 'sum',
      cellClass: 'number-cell',
    },
    {
      field: 'budget',
      aggFunc: 'sum',
      cellClass: 'number-cell',
    },
    {
      field: 'dateAppointed',
      sortable: true,
      filter: true,
      type: 'abColDefDate',
    },
    { field: 'privyCounsellor', editable: true, sortable: true },
  ];

  const gridOptions: GridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    treeData: true, // important as it will enable Tree Data mode
    animateRows: true,
    groupDefaultExpanded: -1, // expand all groups by default
    getDataPath: function(data) {
      return data.government;
    },
    autoGroupColumnDef: {
      headerName: 'HM Government',
      cellRendererParams: {
        suppressCount: true,
      },
    },
    enableRangeSelection: true,
    floatingFilter: true,
    suppressColumnVirtualisation: false,
    suppressMenuHide: true,
    sideBar: true,
    rowSelection: 'multiple',
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'cabinetId',
    userName: 'Demo User',
    adaptableId: 'Tree View Demo',
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
