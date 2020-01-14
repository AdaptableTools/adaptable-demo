import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcustomsortdemo')}
      pageTitle={'Custom Sort Demo'}
      description={
        <div>
          <h4>Custom Sort Demo</h4>
          <p>
            Custom Sort function allows you to specify a custom sort order when
            a column is sorted (as opposed to the default alphabetical or
            numbered sort).
          </p>
          <p>
            This is ideal for both columns where the default sort order doesnt
            make sense (e.g. a 'Ratings' or 'Tenor' column) or where each user
            will have their own preffeed non standard sort (e.g. Sector or
            Currency).
          </p>
          <p>
            This example we created Custom Sorts on 'Employee' and 'Contact'
            columns. Click the header to sort and you will see that they get
            sorted according to the Custom Sort order (and not alphabetically).
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href=" https://api.adaptableblotter.com/interfaces/_predefinedconfig_customsortstate_.customsortstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_customsortapi_.customsortapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819032-Custom-Sort-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755197-Grid-Functions"
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
