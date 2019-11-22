/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AutocompleteItem_location$ref: FragmentReference;
declare export opaque type AutocompleteItem_location$fragmentType: AutocompleteItem_location$ref;
export type AutocompleteItem_location = {|
  +name: ?string,
  +type: ?string,
  +$refType: AutocompleteItem_location$ref,
|};
export type AutocompleteItem_location$data = AutocompleteItem_location;
export type AutocompleteItem_location$key = {
  +$data?: AutocompleteItem_location$data,
  +$fragmentRefs: AutocompleteItem_location$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "AutocompleteItem_location",
  "type": "Location",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'd08ba793c5846ece4df6a6532a3e77b1';
export default node;
