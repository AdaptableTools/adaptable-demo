import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcalendardemo')}
      pageTitle={'Calendar Demo'}
      description={
        <div>
          <p>
            Some functionality in AdapTable (e.g. Filters or Queries) requires
            knowledge of the user's when calculating Next or Previous Working
            Day.
          </p>
          <p>
            To do this a Holiday Calendar is used. The default is 'United
            States' but you can change that through Predefined Config or at
            run-time through the Calendars Function.
          </p>
          <p>
            This example we have set the 'Current Calendar' in Config to be
            France which is what AdapTable will now use when working out if a
            particular Date is a holiday or not.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/calendar-config"
            target="_blank"
          >
            Calendar Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/calendar-api"
            target="_blank"
          >
            Calendar Api
          </a>{' '}
        </div>
      }
    />
  );
};
