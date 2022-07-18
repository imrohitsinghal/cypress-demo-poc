# cypress-demo-poc

### Environments

- Functional and Integration tests can be executed on Local, Stage, Prod etc environments.

### Running tests for the first time

- Install all dependencies (**including cypress**):

  - `npm install` or `npm i`

- Run all scenarios:
  - `npm run test:ui` (This will run all UI Tests)
  - `npm run test:api` (This will execute all API Tests)

### Specs:

- All specs : `/cypress/e2e/`

- Reports and Results:

  - Report folder - `/cypress/report/`
  - Screenshots - `/cypress/screenshots/`

### Configurations

- Environment - ``

- Cypress - ``

### Custom Cypress Commands:

- Add your cypress custom commands under `support/commands.js`

### Without Headless:

- Add `--headed` to the npm command
