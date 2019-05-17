/**
 * @flow
 * @relayHash 4a3ca4438ffc4a1414d17042bb7d2223
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResultsListQueryVariables = {|
  query: string
|};
export type ResultsListQueryResponse = {|
  +locations: ?$ReadOnlyArray<?{|
    +id: ?string,
    +code: ?string,
    +name: ?string,
  |}>
|};
export type ResultsListQuery = {|
  variables: ResultsListQueryVariables,
  response: ResultsListQueryResponse,
|};
*/


/*
query ResultsListQuery(
  $query: String!
) {
  locations(query: $query, limit: 20) {
    id
    code
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
        "name": "id",
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
        "name": "name",
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
    "name": "ResultsListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultsListQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ResultsListQuery",
    "id": null,
    "text": "query ResultsListQuery(\n  $query: String!\n) {\n  locations(query: $query, limit: 20) {\n    id\n    code\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e286cece7684b080eb28673e2e3bb0d6';
module.exports = node;
