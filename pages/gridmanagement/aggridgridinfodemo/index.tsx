import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridgridinfodemo')}
      pageTitle={'Grid Info Demo'}
      description={
        <div>
          <p>
            The Grid Info function (its icon is the 'info' sign) provides at a
            glace summary information about your instance of Adaptable.
          </p>
          <p>The Grid Info 'popup' contains 2 tabs: </p>
          <ul>
            <li>
              <b>Grid Properties</b> which provides licence, column and row
              information for the grid
            </li>
            <li>
              <b>Adaptable Options</b> which displays your AdaptableOptions
              values
            </li>
          </ul>
          <p>
            Most users access this function through the Dashboard as 'GridInfo'
            is one of the default items in the <b>VisibleButtons</b> property in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config#visiblebuttons"
              target="_blank"
            >
              Dashboard Config
            </a>
            .
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/grid-info-function"
            target="_blank"
          >
            Grid Info Function Read Me
          </a>
        </div>
      }
    />
  );
};
