import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridpercentbardemo')}
      pageTitle={'Percent Bar Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Percent Bar Demo</h4>
          <p>
            Create Percent Bars to see numeric data as bar, where the cell is
            filled as a % of its value against the maximum value for the column.
          </p>
          <p>
            Percent Bars work for both positive and negative values and you can
            choose whether to display the actual value. If the column is
            editable, then you can still edit it as normal.
          </p>
          <p>
            In this example we created 3 Percent Bars. The 'Change Last Order'
            Percent Bar automatically shows the negative values, while the 'Item
            Cost' one displays cell values as well as uses a non default colour.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360020459071-Percent-Bar"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899431-Percent-Bar-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005091-Flashing-Cell-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028638052-Cell-Validation-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};