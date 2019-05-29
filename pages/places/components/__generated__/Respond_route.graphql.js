/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Respond_route$ref: FragmentReference;
declare export opaque type Respond_route$fragmentType: Respond_route$ref;
export type Respond_route = {|
  +destination: ?{|
    +city: ?string
  |},
  +$refType: Respond_route$ref,
|};
export type Respond_route$data = Respond_route;
export type Respond_route$key = {
  +$data?: Respond_route$data,
  +$fragmentRefs: Respond_route$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Respond_route",
  "type": "Route",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "destination",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteRendezvous",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "city",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd4fa38d822032a762a2952eab73b6b5c';
module.exports = node;
