/**
 * @flow
 * @relayHash 4917985722a9d6033097eb2a7d895453
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type AutocompleteItem_location$ref = any;
export type AutocompleteItemQueryVariables = {||};
export type AutocompleteItemQueryResponse = {|
  +location: ?{|
    +$fragmentRefs: AutocompleteItem_location$ref
  |}
|};
export type AutocompleteItemQuery = {|
  variables: AutocompleteItemQueryVariables,
  response: AutocompleteItemQueryResponse,
|};

/*
query AutocompleteItemQuery {
  location {
    ...AutocompleteItem_location
    id
  }
}

fragment AutocompleteItem_location on Location {
  id
  type
  name
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AutocompleteItemQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
        "selections": [
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
    "name": "AutocompleteItemQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "location",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
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
            "name": "type",
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AutocompleteItemQuery",
    "id": null,
    "text": "query AutocompleteItemQuery {\n  location {\n    ...AutocompleteItem_location\n    id\n  }\n}\n\nfragment AutocompleteItem_location on Location {\n  id\n  type\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node: any).hash = 'b4394146aedcbb2d2ffc28a8acc7dede';
export default node;
