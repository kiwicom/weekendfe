/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Route_flight$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Itinerary_flights$ref: FragmentReference;
declare export opaque type Itinerary_flights$fragmentType: Itinerary_flights$ref;
export type Itinerary_flights = {|
  +search: ?$ReadOnlyArray<?{|
    +price: ?number,
    +bookingToken: ?string,
    +route: ?$ReadOnlyArray<?{|
      +from: ?{|
        +timeLocal: ?number
      |},
      +to: ?{|
        +timeLocal: ?number
      |},
      +$fragmentRefs: Route_flight$ref,
    |}>,
  |}>,
  +$refType: Itinerary_flights$ref,
|};
export type Itinerary_flights$data = Itinerary_flights;
export type Itinerary_flights$key = {
  +$data?: Itinerary_flights$data,
  +$fragmentRefs: Itinerary_flights$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
  "name": "Itinerary_flights",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "params",
      "type": "SearchParams!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "search",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "params",
          "variableName": "params"
        }
      ],
      "concreteType": "Item",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "price",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "bookingToken",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "route",
          "storageKey": null,
          "args": null,
          "concreteType": "Route",
          "plural": true,
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
              "kind": "FragmentSpread",
              "name": "Route_flight",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b67a8317b5bd2febe6d75786bffa8bb6';
module.exports = node;
