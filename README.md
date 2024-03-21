# Volto Button Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-button-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-button-block)
[![Build Status](https://github.com/kitconcept/volto-button-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-button-block/actions)
[![Build Status](https://github.com/kitconcept/volto-button-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-button-block/actions)
[![Build Status](https://github.com/kitconcept/volto-button-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-button-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Button Block allows editors to add a configurable button to a Volto page.

## Screenshot

![Button-Block](https://github.com/kitconcept/volto-button-block/raw/master/screenshot.png)

## Screencast

![Button-Block](https://github.com/kitconcept/volto-button-block/raw/master/screencast.gif)

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-button-block
cd my-volto-project
```

Add `@kitconcept/volto-button-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-button-block"
],

"dependencies": {
    "@kitconcept/volto-button-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The button block will show up in the Volto blocks chooser.

## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 (currently in alpha)

### Requisites

- Volto 18 (2024-03-21: currently in alpha)
- pnpm as package manager

### Make convenience commands

Run `make help` to list the available commands.

```text
help                                 Show this help
install                              Installs the dev environment using mrs-developer
i18n                                 Sync i18n
format                               Format codebase
lint                                 Lint Codebase
test                                 Run unit tests
test-ci                              Run unit tests in CI
start-backend-docker                 Starts a Docker-based backend for developing
start-test-acceptance-frontend-dev   Start acceptance frontend in dev mode
start-test-acceptance-frontend       Start acceptance frontend in prod mode
start-test-acceptance-server         Start acceptance server
test-acceptance                      Start Cypress in interactive mode
test-acceptance-headless             Run cypress tests in headless mode for CI
```

### Development Environment Setup

Run

```shell
pnpm i
make install
pnpm i
```

### Start developing

Run (in separate terminal sessions)

```shell
make start-backend-docker
```

```shell
pnpm start
```

### Linting

Run

```shell
make lint
```

### Formatting

Run

```shell
make format
```

### i18n

Run

```shell
make i18n
```

### Unit tests

Run

```shell
make test
```

### Run Cypress tests

Run (in separate terminal sessions)

```shell
make start-test-acceptance-frontend-dev
```

```shell
make start-test-acceptance-server
```

Start the Cypress interactive test runner:

```shell
make test-acceptance
```

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
