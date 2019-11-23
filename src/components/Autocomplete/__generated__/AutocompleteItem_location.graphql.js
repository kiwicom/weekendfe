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
  +id: string,
  +type: ?string,
  +name: ?string,
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
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '4909633287465020cb330b9a37d7301d';
export default node;
