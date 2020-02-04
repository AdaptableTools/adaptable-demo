import React from 'react';

import PACKAGE from '../package.json';

import MainPage from '../src/MainPage';

const version = PACKAGE.version;
const versiondate = new Date().toISOString().slice(0, 10);

export default () => {
  return (
    <MainPage pageTitle="AdapTable Demos">
      <div>
        <i>
          Version:&nbsp;
          {version}&nbsp;&nbsp;({versiondate})
        </i>
        <br />
        <p>
          <h3>
            AdapTable is the most advanced and powerful HTML5 Data Management
            Solution available today.
          </h3>
          <b>
            AdapTable provides all the functionality users need to manage data.
          </b>{' '}
          <br />
          AdapTable allows users to control data easily, helping them to be
          productive and efficient, while replacing risk-laden, expensive,
          time-consuming and unique builds. <br />
          AdapTable sits on top of a number of HTML5 DataGrids, both vendor and
          open source, with which it integrates, allowing you to make the
          choices in underlying technologies that work for you.
          <br />
          AdapTable is fully data-agnostic and can work with any data set, for
          any desk, in any team, in any organisation, in any location.
        </p>
        <p>
          <b>Functions</b> <br />
          AdapTable contains a large number of <b>Functions</b> (e.g. Advanced
          Search, Bulk Update, Pie Chart etc). <br />
          Each function has its own 'popup screen' and many also have their own
          toolbars or tool panels for easy access.
          <br />
          All functions are available to all users (depending on the{' '}
          <a href="./admin/aggridentitlementsdemo" target="_blank">
            <b>entitlements</b>
          </a>{' '}
          you set). The combination of a selection from these functions is what
          drives client problem solving.
          <br />
          We can work with you to establish how the function set can help
          resolve your issues, creating the fastest, most easy to use
          applications delivering productivity and profit enhancements.
        </p>
        <p>
          <b>Key Concepts</b> <br />
          AdapTable offers full functionality out of the box, and can be up and
          running within your application within moments of being downloaded,
          using just a few lines of code. <br />
          When you release an application using AdapTable you will typically
          ship it with{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_predefinedconfig_.predefinedconfig.html"
            target="_blank"
          >
            <b>Predefined Config</b>
          </a>{' '}
          - objects that you have created at design time (eg. searches, layouts,
          styles, entitlements etc.) that you would like to be available when it
          first loads. <br />
          You set this Predefined Config as a property of{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_adaptableoptions_adaptableoptions_.adaptableoptions"
            target="_blank"
          >
            <b>Adaptable Options</b>
          </a>{' '}
          - the object that allows you set up AdapTable to meet your precise
          requirements. <br />
          AdaptableOptions is the only property required by AdapTable's
          constructor which returns the{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_adaptableapi_.adaptableapi"
            target="_blank"
          >
            <b>Adaptable Api</b>
          </a>{' '}
          giving you full run-time, code access to all AdapTable functionality
          and state.
        </p>
        <p>
          <b>The Demos</b> <br />
          There is a very large number of{' '}
          <a href="/AdaptableDemoList" target="_self">
            demos
          </a>{' '}
          on this site, allowing you to look at whatever aspects of AdapTable
          most excite you. Each demo seeks to do one of four things:
          <ul>
            <li>
              To demonstrate how an AdapTable function operates; these are
              sorted by type (e.g. Search, Edit etc.)
            </li>
            <li>
              To show key UI elements (e.g. Dashboard, Tool Panel, Context and
              Column Menus etc.)
            </li>
            <li>To illustrate some of the AdapTable Options on offer.</li>
            <li>
              To show-case key admin elements like Audit Log, Big Data, the
              AdapTable Api etc.
            </li>
          </ul>
          Each demo provides, below the grid, all the code that was used. This
          typically includes some Predefined Config and non-default{' '}
          <i>AdaptableOptions</i> properties that were required for that
          specific example.
          <br />
          The demos use the excellent, market-leading{' '}
          <a href="https://www.ag-grid.com/" target="_blank">
            ag-Grid
          </a>{' '}
          as the underlying DataGrid (which{' '}
          <a
            href="https://medium.com/ag-grid/getting-more-from-your-datagrid-introducing-adaptable-blotter-2be5debd7e46"
            target="_blank"
          >
            integrates very well
          </a>{' '}
          with AdapTable), and dummy data from the Microsoft Northwind database
          (Orders table). <br />
        </p>

        <p>
          <b>Installation and Integration</b>
          <br />
          AdapTable is distributed via a{' '}
          <a href="https://registry.adaptabletools.com" target="_blank">
            private npm registry
          </a>
          .
          <br />
          It is straightforward to set up AdapTable and can be done with very
          little code.
          <br />
          See the{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/README.md"
            target="_blank"
          >
            ReadMe guide
          </a>{' '}
          for more information on installation and integration, or take a look
          at{' '}
          <a href="./gettingstarted/aggridbasicsetupdemo" target="_blank">
            the Basic Set Up demo
          </a>
          .
          <br />
        </p>
        <p>
          <b>Framework Wrappers</b>
          <br />
          All the examples in this demo use the 'vanilla' JavaScript version of
          AdapTable.
          <br />
          However, for those who prefer to implement the tool using a JavaScript
          Framework / Library we (currently) provide 2 options:
          <ul>
            <li>
              <a
                href="https://github.com/AdaptableTools/adaptable/tree/master/packages/adaptable-react-aggrid"
                target="_blank"
              >
                React Wrapper
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AdaptableTools/adaptable/tree/master/packages/adaptable-ng-aggrid"
                target="_blank"
              >
                Angular Wrapper
              </a>
            </li>
          </ul>
        </p>
        <p>
          <b>Help</b>
          <br />
          If you require further information please read our{' '}
          <a href="http://api.adaptabletools.com" target="_blank">
            developer documentation
          </a>{' '}
          , visit our{' '}
          <a href="http://adaptabletools.com" target="_blank">
            website
          </a>{' '}
          or use the{' '}
          <a href="https://adaptabletools.zendesk.com/hc/en-us" target="_blank">
            online help
          </a>
          .
        </p>
        <p>
          <b>AdapTable Version</b>
          <br />
          The demos on this site use Version 6 of AdapTable. This contains some
          big changes (and improvements) from previous versions. If you are new
          to Version 6 please read the{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/upgrade-guide.md"
            target="_blank"
          >
            Upgrade Guide
          </a>
          .
        </p>
        <p>
          <b>Custom Examples (on Github)</b>
          <br />
          We have produced some custom examples to fit particular use cases that
          our users have requested. These include:
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-angular-aggrid"
              target="_blank"
            >
              Using the Angular Wrapper
            </a>{' '}
          </li>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptable-react-aggrid"
              target="_blank"
            >
              Using the React Wrapper
            </a>{' '}
          </li>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-ipushpull-integration"
              target="_blank"
            >
              Integration with ipushpull
            </a>{' '}
          </li>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-with-parceljs"
              target="_blank"
            >
              Using ParcelJS to build a minified file
            </a>{' '}
          </li>
        </ul>

        <p>
          <b>Licence and Pricing</b>
          <br />
          AdapTable requires a commercial licence sold on an annual basis. This
          includes guaranteed quarterly (often monthly) updates together with
          full ongoing support.
          <br />
          We provide a range of licence options to suit each use case,
          including: <b>End User</b>, <b>Team</b>, <b>Universal</b>,{' '}
          <b>Developer</b> and <b>Trial</b>.
          <br />
          To find out more about various options on offer and how to join the
          AdapTable community, please{' '}
          <a href="mailto:sales@adaptabletools.com">
            email Adaptable Tools Sales
          </a>
          .
        </p>
        <p>
          <b>Grid Gurus</b>
          <br />
          To develop AdapTable, the Adaptable Tools Development Team learned
          everything there is to know (and more!) about all the DataGrids that
          we support, including the hugely popular ag-Grid.
          <br />
          We researched multiple set up and configuration options, the different
          ways to get data into the grid, the various display modes, when and
          whether to use server or client, when to group, aggregate or pivot,
          how best to update data and much more.
          <br />
          Through our{' '}
          <b>
            <i>Grid Gurus' Service</i>
          </b>{' '}
          you can deploy that unrivalled knowledge alongside your own team to
          help shape DataGrid projects and ensure that they meet your
          requirements as cost and time-effectively as possible. Adaptable
          Tools’ Grid Gurus can work on-site or off-site to set up your Grid in
          a bespoke fashion so that it has optimal alignment to your use cases.
          <br />
          This is particularly important at the start of the project when making
          the right architectural and design decisions can save money, time and
          support heartache down the line...
          <br />
        </p>
        <p>
          <b>Contibuting to our Source Code</b>
          <br />
          We welcome - and value - the many contributions and pull requests we
          receive from the development community; if you want to get involved in
          the project please contact email{' '}
          <a href="mailto:support@adaptabletools.com">
            Adaptable Tools Support
          </a>
        </p>
      </div>
    </MainPage>
  );
};
