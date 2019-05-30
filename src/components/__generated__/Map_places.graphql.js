/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Map_places$ref: FragmentReference;
declare export opaque type Map_places$fragmentType: Map_places$ref;
export type Map_places = {|
  +interests: ?$ReadOnlyArray<?{|
    +name: string,
    +coords: ?{|
      +lat: number,
      +lon: number,
    |},
    +img: ?string,
    +score: ?number,
  |}>,
  +$refType: Map_places$ref,
|};
export type Map_places$data = Map_places;
export type Map_places$key = {
  +$data?: Map_places$data,
  +$fragmentRefs: Map_places$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Map_places",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "coords",
          "storageKey": null,
          "args": null,
          "concreteType": "Coords",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lat",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "lon",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "img",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "score",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '18281bfec2305b879d29804e7f2cd8b7';
module.exports = node;
