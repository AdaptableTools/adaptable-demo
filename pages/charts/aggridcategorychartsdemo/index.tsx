import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/charts/aggridcategorychartsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Category Charts Demo'}
      description={
        <div>
          <h4>Category Charts Demo</h4>
          <p>
            Category Charts enable you to see your data in a number of formats
            eg. column, line, waterfall, etc.
          </p>
          <p>
            There are a huge number of options available for you to style the
            charts how you want and whether to see annotations, call outs etc.
          </p>
          <p>
            By default all charts are live so as you change the data in the grid
            the chart will update automatically.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755217-Chart-Functionss"
              target="_blank"
            >
              User Guide
            </a>{' '}
          </p>
        </div>
      }
    />
  );
};
