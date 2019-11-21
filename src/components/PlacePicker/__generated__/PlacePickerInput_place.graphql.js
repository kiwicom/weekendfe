/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlacePickerInput_place$ref: FragmentReference;
declare export opaque type PlacePickerInput_place$fragmentType: PlacePickerInput_place$ref;
export type PlacePickerInput_place = {|
  +name: ?string,
  +$refType: PlacePickerInput_place$ref,
|};
export type PlacePickerInput_place$data = PlacePickerInput_place;
export type PlacePickerInput_place$key = {
  +$data?: PlacePickerInput_place$data,
  +$fragmentRefs: PlacePickerInput_place$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "PlacePickerInput_place",
  "type": "Place",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'f77d3bd20c5edd07ddb248d2ce0b449e';
export default node;
