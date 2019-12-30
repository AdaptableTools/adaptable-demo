import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridnocodedemo')}
      pageTitle={'No Code Demo'}
      description={
        <div>
          <h4>No Code Demo</h4>
          <p>
            The no code version allows you to create an Adaptable Blotter at
            runtime from any JSON (and soon any Excel) file that you give it.
          </p>
          <p>
            It will dynamically provide a fully functional Adaptable including
            advanced features like state management and audit log, enabling you
            to attach to the same source daily or multiple different sources.
          </p>
          <p>
            Simply link to a file (or drag and drop) and Adaptable No Code
            Wizard will appear.
          </p>
          <p>
            In the first step it will read the file and work out which columns
            it contains, giving you the option to change any assumptions around
            datatype and to set editabiity and sortabiity for each column.
          </p>
          <p>
            In the second (optional) step you can set up many of the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_adaptableoptions_adaptableblotteroptions_.adaptableblotteroptions.html"
              target="_blank"
            >
              Adaptable Options
            </a>{' '}
            that you would normally provide at design-time to ensure that the
            Adaptable Blotter suits your requirements.
          </p>
        </div>
      }
    />
  );
};
