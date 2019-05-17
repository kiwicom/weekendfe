/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Route_flight$ref: FragmentReference;
declare export opaque type Route_flight$fragmentType: Route_flight$ref;
export type Route_flight = {|
  +from: ?{|
    +city: ?string,
    +iata: ?string,
    +timeLocal: ?number,
  |},
  +to: ?{|
    +city: ?string,
    +iata: ?string,
    +timeLocal: ?number,
  |},
  +parts: ?$ReadOnlyArray<?{|
    +type: ?string,
    +carrier: ?string,
    +from: ?{|
      +timeLocal: ?number
    |},
    +to: ?{|
      +timeLocal: ?number
    |},
  |}>,
  +interests: ?$ReadOnlyArray<?{|
    +name: string
  |}>,
  +$refType: Route_flight$ref,
|};
export type Route_flight$data = Route_flight;
export type Route_flight$key = {
  +$data?: Route_flight$data,
  +$fragmentRefs: Route_flight$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timeLocal",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "city",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "iata",
    "args": null,
    "storageKey": null
  },
  (v0/*: any*/)
],
v2 = [
  (v0/*: any*/)
];
return {
  "kind": "Fragment",
  "name": "Route_flight",
  "type": "Route",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "from",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteRendezvous",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "to",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteRendezvous",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "parts",
      "storageKey": null,
      "args": null,
      "concreteType": "Part",
      "plural": true,
      "selections": [
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
          "name": "carrier",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "from",
          "storageKey": null,
          "args": null,
          "concreteType": "PartRendezvous",
          "plural": false,
          "selections": (v2/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "to",
          "storageKey": null,
          "args": null,
          "concreteType": "PartRendezvous",
          "plural": false,
          "selections": (v2/*: any*/)
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "interests",
      "storageKey": null,
      "args": null,
      "concreteType": "Interest",
      "plural": true,
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
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '25e9dd9e7c36716a3a2d2807a90c29f0';
module.exports = node;
