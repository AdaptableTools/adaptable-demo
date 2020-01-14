import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridalertdemo')}
      pageTitle={'Alert Demo'}
      description={
        <div>
          <h4>Alerts Demo</h4>
          <p>Create alerts when data changes in way you need to know about.</p>
          <p>
            You can create alerts to appear in response to a wide variety of
            data changes both user edits and in the data source. Choose whether
            Alerts as popups, in the toolbar, or both.
          </p>
          <p>
            This example has 2 alerts: One fires a warning and popup when the
            'Invoiced' column > 2000 (make this edit and see for yourself). The
            other fires an info alert in the toolbar when the 'Item Count'
            doubles (we mimic this by having dummy ticking data which will
            randomly trigger the alert which you should see appear in the
            toolbar).
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_alertstate_.alertstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_alertapi_.alertapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029895931-Alert-Functions-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029895731-Alerts-Videos"
              target="_blank"
            >
              Videos
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
