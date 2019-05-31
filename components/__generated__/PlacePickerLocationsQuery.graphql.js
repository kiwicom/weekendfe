/**
 * @flow
 * @relayHash d6cb4f2b349d6c2cd570029ad3d745c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PlacePickerLocationsQueryVariables = {|
  id: string
|};
export type PlacePickerLocationsQueryResponse = {|
  +place: ?{|
    +name: ?string
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
    name
    id
  }
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
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
          (v2/*: any*/)
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
          (v2/*: any*/),
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
    "text": "query PlacePickerLocationsQuery(\n  $id: String!\n) {\n  place(id: $id) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e3b5ac548f2f444f876ff1907fe31ac';
module.exports = node;
