/**
 * @flow
 * @relayHash ab65017982628c7ada828534faf690f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerInput_place$ref = any;
export type PlacePickerLocationsQueryVariables = {|
  id: string
|};
export type PlacePickerLocationsQueryResponse = {|
  +place: ?{|
    +$fragmentRefs: PlacePickerInput_place$ref
  |}
|};
export type PlacePickerLocationsQuery = {|
  variables: PlacePickerLocationsQueryVariables,
  response: PlacePickerLocationsQueryResponse,
|};
*/


/*
query PlacePickerLocationsQuery(
  $id: String!
) {
  place(id: $id) {
    ...PlacePickerInput_place
    id
  }
}

fragment PlacePickerInput_place on Place {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerLocationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "place",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Place",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PlacePickerInput_place",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerLocationsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "place",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Place",
        "plural": false,
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
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PlacePickerLocationsQuery",
    "id": null,
    "text": "query PlacePickerLocationsQuery(\n  $id: String!\n) {\n  place(id: $id) {\n    ...PlacePickerInput_place\n    id\n  }\n}\n\nfragment PlacePickerInput_place on Place {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c23d6fc879bc3b7556893add02654256';
module.exports = node;
