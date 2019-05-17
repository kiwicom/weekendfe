/**
 * @flow
 * @relayHash 3b25ecde709c7c25bd48be465df02cdd
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
    +id: ?string,
    +code: ?string,
    +name: ?string,
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
    "text": "query PlacePickerLocationsQuery(\n  $id: String!\n) {\n  place(id: $id) {\n    id\n    code\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0ae9b5d3795e4d5839c8328565e2f47';
module.exports = node;
