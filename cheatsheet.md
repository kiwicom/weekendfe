## Weekend - Flow + GraphQL

## Flow

> Done for you in this branch :)

See installation to your project: https://flow.org/en/docs/install/

#### Run flow type check after changes:

```
yarn flow
```

#### Flow config

> Check [.flowconfig](.flowconfig)

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
