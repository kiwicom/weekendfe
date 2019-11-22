/**
 * @flow
 * @relayHash 7f0e3dc0b2aa1165b6e8e16d465d512d
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type AutocompleteItem_location$ref = any;
export type AutocompleteQueryVariables = {|
  query: string
|};
export type AutocompleteQueryResponse = {|
  +locations: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: AutocompleteItem_location$ref,
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
    ...AutocompleteItem_location
  }
}

fragment AutocompleteItem_location on Location {
  name
  type
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AutocompleteQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "AutocompleteItem_location",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AutocompleteQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AutocompleteQuery",
    "id": null,
    "text": "query AutocompleteQuery(\n  $query: String!\n) {\n  locations(query: $query, limit: 5) {\n    id\n    ...AutocompleteItem_location\n  }\n}\n\nfragment AutocompleteItem_location on Location {\n  name\n  type\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'a038bac493b7070e52de8065a9cc0853';
export default node;
