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
  DashboardButtonClickedEventArgs,
  AdaptableState,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

// Create 2 views and set Current View to first
const views = ['adaptableStateKey-demo1', 'adaptableStateKey-demo2'].map(
  x => `${x}`
);
let currentView = views[0];

// Set the Adaptable Toolbar title to the Current View
const getToolbarTitle = () => {
  return currentView === views[0] ? 'First view' : 'Second view';
};

// Create config for View1 - with some format columns, percent bar and gradient column
const view1Config: PredefinedConfig = {
  Dashboard: {
    VisibleButtons: ['Dashboard', 'Layout'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Query', 'Alert', 'Layout'],
      },
    ],
    CustomButtons: [
      {
        Name: 'ChangeView',
        Caption: 'Click to toggle the View ',
        ButtonStyle: {
          Variant: 'raised',
          Tone: 'neutral',
        },
      },
      {
        Name: 'clear',
        Caption: 'Clear Views State',
      },
    ],
  },
  // For view1 we will search on 'Ha'
  QuickSearch: {
    QuickSearchText: 'Ha',
  },
  Layout: {
    CurrentLayout: 'View1 Layout',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ChangeLastOrder',
          'CompanyName',
          'InvoicedCost',
          'PackageCost',
          'ItemCost',
          'ItemCount',
          'ContactName',
          'Employee',
          'OrderCost',
        ],
        Name: 'View1 Layout',
      },
    ],
  },
  // Add Formats for PackageCost and ItemCount
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['PackageCost'],
        },
        Style: {
          FontWeight: 'Bold',
          FontSize: 'XSmall',
          FontStyle: 'Italic',
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            Parentheses: true,
            IntegerDigits: 3,
          },
        },
        CellAlignment: 'Center',
      },
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        Style: {
          BackColor: '#d4fb79',
          ForeColor: '#8b0000',
          FontWeight: 'Bold',
        },
      },
    ],
  },
  GradientColumn: {
    GradientColumns: [
      {
        ColumnId: 'ChangeLastOrder',
        NegativeValue: -41,
        PositiveValue: 56,
        NegativeColor: '#FF0000',
        PositiveColor: '#00CC00',
        BaseValue: 0,
      },
    ],
  },
  PercentBar: {
    PercentBars: [
      {
        ColumnId: 'InvoicedCost',
        Ranges: [
          { Min: 0, Max: 500, Color: '#ff0000' },
          { Min: 500, Max: 1000, Color: '#ffa500' },
          { Min: 1000, Max: 3000, Color: '#008000' },
        ],
        ShowValue: false,
      },
    ],
  },
} as PredefinedConfig;

// Create a second Config for View2 - this will contain DIFFERENT state to that for View1 Config
const view2Config: PredefinedConfig = {
  Dashboard: {
    HomeToolbarTitle: getToolbarTitle(),
    VisibleButtons: ['Dashboard', 'Layout', 'GradientColumn', 'FormatColumn'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Export', 'Layout', 'CellSummary'],
      },
    ],
    CustomButtons: [
      {
        Name: 'ChangeView',
        Caption: 'Click to toggle the View ',
        ButtonStyle: {
          Variant: 'raised',
          Tone: 'neutral',
        },
      },
    ],
  },
  // For view2 we will search on st
  QuickSearch: {
    QuickSearchText: 'st',
  },
  Layout: {
    CurrentLayout: 'View2 Layout',
    Layouts: [
      {
        Name: 'View2 Layout',
        Columns: [
          'Employee',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
        ],
      },
    ],
  },
  // Second config will have differeent format for PackageCost than View1 and one for OrderCost
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['PackageCost'],
        },
        Style: {
          FontSize: 'Large',
          ForeColor: 'red',
          BackColor: 'blue',
          FontStyle: 'Italic',
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            Parentheses: true,
            IntegerDigits: 3,
          },
        },
        CellAlignment: 'Center',
      },
      {
        Scope: {
          ColumnIds: ['OrderCost'],
        },
        Style: {
          BackColor: 'orange',
          ForeColor: 'green',
          FontStyle: 'Italic',
        },
      },
    ],
  },
};

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    sideBar: true,
    suppressMenuHide: true,
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: getToolbarTitle(),
    // Set the adaptableStateKey to the Current view (instead of default which is 'adaptableId')
    adaptableStateKey: currentView,
    // We use the StateOptions functions to demonstrate how the ViewId can be persisted and reloaded
    stateOptions: {
      applyState: state => {
        console.log('loading view id', state.viewId);
        delete state.viewId;
        return state;
      },
      saveState: (state: AdaptableState, { adaptableStateKey }) => {
        const result: any = state;
        result.viewId = adaptableStateKey;
        console.log('saving view id', adaptableStateKey);
        return result;
      },
    },
    predefinedConfig: view1Config, // start off with View1 config
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  // We wrap the 'AdaptableReady' event in a once method to ensure it does not called each time the view reloads
  adaptableApi.eventApi.on(
    'AdaptableReady',
    once(({ vendorGrid }: { vendorGrid: GridOptions }) => {
      console.log('Adaptable Ready was called - should only happen once');
      setTimeout(() => {
        vendorGrid.api?.setRowData(rowData);
      }, 500);
    })
  );

  adaptableApi.eventApi.on(
    'DashboardButtonClicked',
    (dashboardButtonClickedEventArgs: DashboardButtonClickedEventArgs) => {
      if (
        dashboardButtonClickedEventArgs.data[0].id.dashboardButton.Name ==
        'clear'
      ) {
        localStorage.clear();
        window.location.href = window.location.href;
      }
      if (
        dashboardButtonClickedEventArgs.data[0].id.dashboardButton.Name ==
        'ChangeView'
      ) {
        currentView = currentView === views[0] ? views[1] : views[0];

        let currentConfig =
          currentView === views[0] ? view1Config : view2Config;

        adaptableApi.configApi
          .setAdaptableStateKey(currentView, {
            predefinedConfig: currentConfig,
          })
          .then(() => {
            adaptableApi.dashboardApi.setHomeToolbarTitle(getToolbarTitle());
          });
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};

const once = (fn: any) => {
  let result: any;
  let called = false;
  return (...args: any[]) => {
    if (called) {
      return result;
    }
    called = true;
    result = fn(...args);
  };
};
