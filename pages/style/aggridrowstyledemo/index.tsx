import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridrowstyledemo')}
      pageTitle={'Row Style Demo'}
      description={
        <div>
          <p>
            By default ag-Grid will display according to the{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-themes-provided/"
              target="_blank"
            >
              provided theme
            </a>{' '}
            you use (e.g. Balham, Blue, Blue etc.)
          </p>
          <p>
            However you are able to style the rows in the ag-Grid using the
            RowStyles property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/user-interface-config"
              target="_blank"
            >
              User Interface State
            </a>
            .
          </p>
          <p>
            The <i>RowStyles</i> array can include 'Odd' and 'Even' properties
            which will style as their names suggest; you can provide just one of
            these properties but typicallly both will be supplied.{' '}
          </p>
          <p>
            Alternatively you can provide an 'All' property. This will style{' '}
            <b>all rows</b> (and will ignore the Even and Odd properties if they
            are also supplied).
          </p>
          <p>
            Each of the 3 types of properties will use an{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-style"
              target="_blank"
            >
              Adaptable Style
            </a>{' '}
            object - this can either include a list of style values (e.g.
            'ForeColor') or a cssClass name (which you must then provide in your
            css).
          </p>{' '}
          <p>
            In this example we have set an Initial Style and then added 3
            buttons to load more dynamically via the AdapTable Api.
          </p>
        </div>
      }
    />
  );
};
