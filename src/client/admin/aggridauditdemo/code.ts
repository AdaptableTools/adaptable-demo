import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  AdaptableApi,
  AuditLogEventArgs,
  DataChangedDetails,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Audit Log Demo',
    auditOptions: {
      auditUserStateChanges: {
        auditToConsole: true,
      },
      auditFunctionsApplied: {
        auditToConsole: true,
        //  auditAsAlert: true,
        auditToHttpChannel: true,
      },
      auditCellEdits: {
        auditToConsole: true,
        auditAsEvent: true,
      },
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.auditEventApi.on(
    'AuditCellEdited',
    (auditLogEventArgs: AuditLogEventArgs) => {
      const dataChangeDetails: DataChangedDetails | undefined =
        auditLogEventArgs.data[0].id.data_change_details;
      alert(
        'you changed "' +
          dataChangeDetails?.previous_value +
          '" to: "' +
          dataChangeDetails?.new_value +
          '"'
      );
    }
  );

  return { adaptableOptions, adaptableApi };
};
