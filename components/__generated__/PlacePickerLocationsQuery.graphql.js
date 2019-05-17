/**
 * @flow
 * @relayHash 7839dfd1df9615fe81eec580790975d0
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
    "kind": "LinkedField",
    "alias": null,
    "name": "place",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Place",
    "plural": false,
    "selections": [
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
    "name": "PlacePickerLocationsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerLocationsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "PlacePickerLocationsQuery",
    "id": null,
    "text": "query PlacePickerLocationsQuery(\n  $id: String!\n) {\n  place(id: $id) {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e3b5ac548f2f444f876ff1907fe31ac';
module.exports = node;
