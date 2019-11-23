## Weekend - Flow + Jest + GraphQL

```
git fetch --all
git checkout kubajz/start
```

## Flow

> Done for you in this branch :)

See installation to your project: https://flow.org/en/docs/install/

#### Examples

- [basics](http://bit.ly/2KNJkKl) 
- [react](http://bit.ly/2qttbmz)

#### Flow lint

https://flow.org/en/docs/linting/

#### Run flow type check after changes:

```
yarn flow
```

#### Flow config

> Check [.flowconfig](.flowconfig)

#### Task!

run in your console:

```
yarn flow:mess
```

-> fix reported errors in [BigMess.js](./src/components/BrokenFlow/BigMess.js)

## Unit tests with jest

- [jest](https://jestjs.io/docs/en/getting-started.html)
- [enzyme](https://airbnb.io/enzyme/)
- [jest-date-mock]() - sometimes you need more, this is just one of many libs for making unit tests with jest more friendly

```
yarn test
yarn test --watch
```

> Note we had to install type definitions for enzyme, jest & jest-date-mock

- Try to remove definitions for `jest-date-mock` and run `yarn flow`
- you might try to install them again by `flow-typed install jest-date-mock`
- oh no, you might get `No flow@v0.112.0-compatible libdefs found in flow-typed`
- in such case you can generate stubs for it (`flow-typed create-stub jest-date-mock`)

These enzyme functions might be useful:

```
wrapper.find(selector)
wrapper.prop(propName)
```

## GraphQL

- `graphql` tagged template literal - how it works in general: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates

Basic query to fetch location:

```graphql
  query AutocompleteQuery($query: String!) {
    locations(query: $query, limit: 5) {
      id
      name
      type
    }
  }
```

#### Eslint for relay

> Done for you in this branch

Add eslint rules for relay to your project:

```
yarn add eslint-plugin-relay --dev
```

and in your [.eslintrc.js](.eslintrc.js)

```
  extends: [
    "plugin:relay/strict"
  ],
```

#### Unit test for fragment component

```
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

// 1. step: create mock environment
const environment = createMockEnvironment();

// 2. step: render component with mocked environment

// 3. step: resolve pending queries
environment.mock.resolveMostRecentOperation(operation => data)

// 4. test your component
```

- [Relay docs: Testing relay components](https://relay.dev/docs/en/testing-relay-components)
- [relay-test-utils](https://www.npmjs.com/package/relay-test-utils)
- GIST for cheating: [fragmentComponentTest.js](https://gist.github.com/jaroslav-kubicek/421c7775075bae0942aa64a337308e46)

#### Misc

*Demo*

- https://github.com/adeira/relay-example and [relay-example demo](https://github.com/adeira/relay-example)

*Server*

- https://graphql.org/graphql-js/ to build server
- [nexus](https://nexus.js.org/) to build server, especially if you prefer typescript
- [dataloader](https://github.com/graphql/dataloader) core spice for efficient GraphQL server
- [graphql-bc-checker](https://github.com/adeira/universe/tree/master/src/graphql-bc-checker) to detect breaking changes (check also https://github.com/graphql/graphql-js/blob/master/src/utilities/findBreakingChanges.js)
- [Where art thou, my error?](http://artsy.github.io/blog/2018/10/19/where-art-thou-my-error/) how to handle errors in schema

*Other*

- [relay.dev](https://relay.dev/)
- [@adeira/relay](https://www.npmjs.com/package/@adeira/relay)
- [relay best practices](https://code.kiwi.com/relay-and-graphql-best-practices-b09ce1d6d7ea)
- [Building Great User Experiences with Concurrent Mode and Suspense](https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html) if you want to see future

*Relay*

- [relay docs](https://relay.dev/)
- [Relay Modern Learning Blog Posts](https://twitter.com/sseraphini/status/1078595758801203202?s=20)

*In case you use Apollo*

- [Apollo Codegen](https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output) - make sure you use codegen to generate types
