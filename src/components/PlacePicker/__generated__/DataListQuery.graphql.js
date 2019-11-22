/**
 * @flow
 * @relayHash 70e9ed90a51e15c2be04d8b7bfe2affb
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type DataListQueryVariables = {|
  query: string
|};
export type DataListQueryResponse = {|
  +locations: ?$ReadOnlyArray<?{|
    +name: ?string,
    +code: ?string,
    +id: string,
  |}>
|};
export type DataListQuery = {|
  variables: DataListQueryVariables,
  response: DataListQueryResponse,
|};

/*
query DataListQuery(
  $query: String!
) {
  locations(query: $query, limit: 20) {
    name
    code
    id
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
        "value": 20
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
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "DataListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DataListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "DataListQuery",
    "id": null,
    "text": "query DataListQuery(\n  $query: String!\n) {\n  locations(query: $query, limit: 20) {\n    name\n    code\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'ba45049accfc93b194e79b1b70b2d311';
export default node;
