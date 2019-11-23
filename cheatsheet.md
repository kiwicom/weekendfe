## Weekend - Flow + GraphQL

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

#### Misc

*Demo*

- https://github.com/adeira/relay-example and [relay-example demo](https://github.com/adeira/relay-example)

*Server*

- https://graphql.org/graphql-js/ to build server
- [nexus](https://nexus.js.org/) to build server, especially if you prefer typescript
- [dataloader](https://github.com/graphql/dataloader) core spice for efficient GraphQL server
- [graphql-bc-checker](https://github.com/adeira/universe/tree/master/src/graphql-bc-checker) to detect breaking changes (check also https://github.com/graphql/graphql-js/blob/master/src/utilities/findBreakingChanges.js)

*Other*

- [relay best practices](https://code.kiwi.com/relay-and-graphql-best-practices-b09ce1d6d7ea)
- [Building Great User Experiences with Concurrent Mode and Suspense](https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html) if you want to see future
