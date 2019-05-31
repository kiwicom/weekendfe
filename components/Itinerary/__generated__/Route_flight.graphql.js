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
    +carrier: ?string
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
var v0 = [
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
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "timeLocal",
    "args": null,
    "storageKey": null
  }
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
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "to",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteRendezvous",
      "plural": false,
      "selections": (v0/*: any*/)
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
          "name": "carrier",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '3cebdf443597d3513853438caf85ce88';
module.exports = node;
