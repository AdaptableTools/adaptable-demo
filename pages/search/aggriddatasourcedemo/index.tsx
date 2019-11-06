import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggriddatasourcedemo')}
      pageTitle={'Data Source Demo'}
      description={
        <div>
          <h4>Data Source Selector Demo</h4>
          <p>
            Data Sources are lists of 'hard coded' names provided by you in
            Predefined Config to enable you to <b>run searches on the Server</b>
            .
          </p>
          <p>
            When a Data Source is selected, the <i>SearchChanged</i> event fires
            - stating what triggered the event and providing full state details
            (including the selected DataSource).
          </p>
          <p>
            This allows you to perform the necessary search on the server and
            return data to the Adaptable Blotter via the GridAPi{' '}
            <i>setGridData</i> method. (A forthcoming release will provide
            parameterised queries functionality.)
          </p>
          <p>
            In this example we created 4 Data Sources. We subscribe to
            SearchChanged event, fetch the relevant data and send to the Blotter
            via the API. We also ouput the event info to the console for your
            convenience.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755137-Search-Functions"
              target="_blank"
            >
              User Guide
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_runtimestate_datasourcestate_.datasourcestate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            -{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_interface_idatasourceapi_.idatasourceapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            -{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029895991-Data-Source-Selector-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            -{' '}
            <a href="" target="_blank">
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
