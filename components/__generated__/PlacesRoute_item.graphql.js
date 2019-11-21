/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type Map_places$ref = any;
type PlaceCard_places$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlacesRoute_item$ref: FragmentReference;
declare export opaque type PlacesRoute_item$fragmentType: PlacesRoute_item$ref;
export type PlacesRoute_item = {|
  +route: ?$ReadOnlyArray<?{|
    +destination: ?{|
      +city: ?string
    |},
    +$fragmentRefs: Map_places$ref & PlaceCard_places$ref,
  |}>,
  +$refType: PlacesRoute_item$ref,
|};
export type PlacesRoute_item$data = PlacesRoute_item;
export type PlacesRoute_item$key = {
  +$data?: PlacesRoute_item$data,
  +$fragmentRefs: PlacesRoute_item$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PlacesRoute_item",
  "type": "Item",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        },
        {
          "kind": "FragmentSpread",
          "name": "Map_places",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PlaceCard_places",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = 'fb83e35053ae45986d48a33fd7d54390';
export default node;
