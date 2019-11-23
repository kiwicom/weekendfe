/**
 * @flow
 * @relayHash 2fc2106af41e1600cf12f16009ec9b91
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type AutocompleteItem_location$ref = any;
export type AutocompleteQueryVariables = {|
  query: string
|};
export type AutocompleteQueryResponse = {|
  +allLocations: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: AutocompleteItem_location$ref,
      |}
    |}>
  |}
|};
export type AutocompleteQuery = {|
  variables: AutocompleteQueryVariables,
  response: AutocompleteQueryResponse,
|};

/*
query AutocompleteQuery(
  $query: String!
) {
  allLocations(search: $query, first: 5) {
    edges {
      node {
        id
        ...AutocompleteItem_location
      }
    }
  }
}

fragment AutocompleteItem_location on Location {
  id
  type
  name
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
    "name": "first",
    "value": 5
  },
  {
    "kind": "Variable",
    "name": "search",
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
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allLocations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
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
        "name": "allLocations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AutocompleteQuery",
    "id": null,
    "text": "query AutocompleteQuery(\n  $query: String!\n) {\n  allLocations(search: $query, first: 5) {\n    edges {\n      node {\n        id\n        ...AutocompleteItem_location\n      }\n    }\n  }\n}\n\nfragment AutocompleteItem_location on Location {\n  id\n  type\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '3fb715fe9be6e3045633985787826f94';
export default node;
