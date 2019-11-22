/**
 * @flow
 * @relayHash c70c6fadd01ebd4e576f08f665a856bc
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type AutocompleteQueryVariables = {|
  query: string
|};
export type AutocompleteQueryResponse = {|
  +locations: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +type: ?string,
  |}>
|};
export type AutocompleteQuery = {|
  variables: AutocompleteQueryVariables,
  response: AutocompleteQueryResponse,
|};

/*
query AutocompleteQuery(
  $query: String!
) {
  locations(query: $query, limit: 5) {
    id
    name
    type
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "locations",
    "storageKey": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 5
      },
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query"
      }
    ],
    "concreteType": "Location",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AutocompleteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AutocompleteQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AutocompleteQuery",
    "id": null,
    "text": "query AutocompleteQuery(\n  $query: String!\n) {\n  locations(query: $query, limit: 5) {\n    id\n    name\n    type\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '7c55e300604e51d85004c5aebb49a897';
export default node;
