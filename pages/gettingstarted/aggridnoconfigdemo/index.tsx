import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/gettingstarted/aggridnoconfigdemo')}
      pageTitle={'No Config Demo'}
      description={
        <div>
          <p>
            AdapTable offers more than 30 functions to allow you to search,
            filter, edit, audit, export and style your data in cutting-edge and
            exciting ways.
          </p>
          <p>
            Typically you ship the AdapTable instance with{' '}
            <a href="../adaptablestate/aggridpredefinedconfigdemo">
              <b>Predefined Config</b>
            </a>{' '}
            (searches, views, reports etc. created at design time). And you'll
            set Adaptable Options to non-default values to configure your grid
            to precise requirements.
          </p>
          <p>
            You will also likely include Entitlements as part of Predefined
            Config so that users only have access to the functions and the
            functionality that they require.
          </p>
          <p>
            This basic example has <b>no</b> Predefined Configuration (or
            Entitlements) and no non-default AdaptableOptions properties.{' '}
          </p>
          <p>
            So all the functionality (e.g. the 40+ AdapTable functions, the
            Column Header and Context Menus, the Dashbaord, the Quick Filter bar
            etc.) is available in a default way.
          </p>
          <p>
            Note: because we have not provided any Dashboard Config with any
            Tabs, AdapTable has provided the default Tab for us.
          </p>
        </div>
      }
    />
  );
};
