import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridcalculatedcolumndemo')}
      pageTitle={'Calculated Column Demo'}
      description={
        <div>
          <h4>Calculated Column Demo</h4>
          <p>
            Calculated columns are custom columns that you create (at design or
            run time) where the value is now in the bound dataset but is{' '}
            <b>derived</b> from other columns in the row.
          </p>
          <p>
            Create them with an Expression which can range from straightforward
            to incredibly complex (we use{' '}
            <a href="https://mathjs.org/" target="_blank">
              Math.JS
            </a>
            ). They become a 'normal' column in the grid and will update
            automatically as other values change.
          </p>
          <p>
            This example we created 3 Calculated Columns: <i>Avg Item Cost</i>{' '}
            and <i>Profit</i> (which are numeric) and <i>Comment</i> (a string).
            Click the 5th button in toolbar to see details of the Expression -
            or 'Edit Expression' in the Column Header menu. Because they are
            treated as 'normal' columns we were able to include them in the
            layout we created (and we grouped on 'Comment') and also to style
            them (e.g. 'Profit') using Conditional Styles.
          </p>

          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_calculatedcolumnstate_.calculatedcolumnstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_calculatedcolumnapi_.calculatedcolumnapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030078351-Calculated-Column-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030078491-Calculated-Column-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360003213038-Special-Column-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
