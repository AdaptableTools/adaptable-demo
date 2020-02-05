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
  Dashboard: {
    VisibleToolbars: ['SystemStatus', 'DemoButtons'],
    CustomToolbars: [
      {
        Name: 'DemoButtons',
        Title: 'Demo Buttons',
        Glyph: 'advanced-search',
        ToolbarButtons: [
          {
            Name: 'info',
            Caption: 'Set Info',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'info',
            },
          },
          {
            Name: 'success',
            Caption: 'Set Success',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'success',
            },
          },
          {
            Name: 'warning',
            Caption: 'Set Warning',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'warning',
            },
          },
          {
            Name: 'error',
            Caption: 'Set Error',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'error',
            },
          },
          {
            Name: 'clear',
            Caption: 'Clear Message',
            //   Variant: 'raised',
          },
        ],
      },
    ],
  },
  SystemStatus: {
    ShowAlert: false,
    //  DefaultStatusMessage: 'Everything is fine',
    //  DefaultStatusType: 'Success',
    StatusMessage: 'Server running slowly',
    StatusType: 'Warning',
  },
} as PredefinedConfig;

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
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'System Status Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'ToolbarButtonClicked',
    toolbarButtonClickedEventArgs => {
      switch (toolbarButtonClickedEventArgs.data[0].id.toolbarButton.Name) {
        case 'info':
          adaptableApi.systemStatusApi.setInfoSystemStatus('No issues');
          break;
        case 'success':
          adaptableApi.systemStatusApi.setSuccessSystemStatus(
            'All working fine'
          );
          break;
        case 'warning':
          adaptableApi.systemStatusApi.setWarningSystemStatus(
            'Problems with server'
          );
          break;
        case 'error':
          adaptableApi.systemStatusApi.setErrorSystemStatus(
            'The server is down!',
            'Please do not make any edits until the server comes back up'
          );
          break;
        case 'clear':
          adaptableApi.systemStatusApi.clearSystemStatus();
          break;
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
