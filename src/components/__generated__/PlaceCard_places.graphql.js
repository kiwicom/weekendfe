/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlaceCard_places$ref: FragmentReference;
declare export opaque type PlaceCard_places$fragmentType: PlaceCard_places$ref;
export type PlaceCard_places = {|
  +interests: ?$ReadOnlyArray<?{|
    +name: string,
    +address: ?string,
  |}>,
  +$refType: PlaceCard_places$ref,
|};
export type PlaceCard_places$data = PlaceCard_places;
export type PlaceCard_places$key = {
  +$data?: PlaceCard_places$data,
  +$fragmentRefs: PlaceCard_places$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PlaceCard_places",
  "type": "Route",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "address",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '19545d583ca0fc7428279d509c3910e0';
export default node;
