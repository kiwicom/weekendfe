#### Install

yarn add -D cypress

#### Add script
`"cypress:open": "cypress open"` to package.json
to avoid writing `./node_modules/.bin/cypress open`

#### Launch
$ yarn cypress:open

#### Run examples

#### ESLint

Add eslint `yarn add -D eslint-plugin-cypress`

cypress/.eslintrc

```
{
  "plugins": [
    "cypress"
  ],
  "env": {
    "cypress/globals": true
  }
}
```

Check additional rules <https://github.com/cypress-io/eslint-plugin-cypress#rules>

#### ToC - the hard part

```
describe
  describe
    it
      command
      command
      assert
      command
      assert
    it
      // ...
    it
      // ...
  describe
    it
      // ...
    it
      // ...
```

#### Implementation - the easy part

Workshop!





