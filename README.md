# cypress-demo-poc

### Environments

- Functional and Integration tests can be executed on Local, Stage, Prod etc environments.

### Running tests for the first time

- Install all dependencies (**including cypress**):

  - `npm install` or `npm i`

- Run all scenarios:

  - `npm run test:ui` _This will run all UI Tests_
  - `npm run test:api` _This will execute all API Tests_

- Generate Test Report:

  - `npm run report` _This will generate a report file under reports directory_
  - `npm run pretest` **\*Note**: Execute before each run to delete any exisiting reports or screenshots\*

### Specs and Reporting:

- All specs : `cypress/e2e/`

- Reports and Results:

  - Report folder - `cypress/reports/`
  - Screenshots - `cypress/screenshots/`

### Configurations

- Environment and Cypress - `cypress.config.js`

### Custom Cypress Commands:

- Add your cypress custom commands under `support/commands.js`

### Without Headless:

- Add `--headed` to the npm command in package.json
  - Eg: _cypress run --browser chrome **--headed** --env host=prod --spec \"cypress/e2e/\*.spec.js\"_
