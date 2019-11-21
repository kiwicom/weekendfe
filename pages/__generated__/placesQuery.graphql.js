/**
 * @flow
 * @relayHash 5e49202468cca61dc046708410065834
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type PlacesRoute_item$ref = any;
export type placesQueryVariables = {|
  interest: string,
  bookingToken: string,
|};
export type placesQueryResponse = {|
  +item: ?{|
    +$fragmentRefs: PlacesRoute_item$ref
  |}
|};
export type placesQuery = {|
  variables: placesQueryVariables,
  response: placesQueryResponse,
|};

/*
query placesQuery(
  $interest: String!
  $bookingToken: String!
) {
  item(interest: $interest, bookingToken: $bookingToken) {
    ...PlacesRoute_item
  }
}

fragment Map_places on Route {
  interests {
    name
    coords {
      lat
      lon
    }
    img
    score
    id
  }
}

fragment PlaceCard_places on Route {
  interests {
    name
    address
    id
  }
}

fragment PlacesRoute_item on Item {
  route {
    ...Map_places
    ...PlaceCard_places
    destination {
      city
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "interest",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "bookingToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "bookingToken",
    "variableName": "bookingToken"
  },
  {
    "kind": "Variable",
    "name": "interest",
    "variableName": "interest"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "placesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "item",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "PlacesRoute_item",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "placesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "item",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "plural": false,
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
                  },
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
                    "name": "address",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "placesQuery",
    "id": null,
    "text": "query placesQuery(\n  $interest: String!\n  $bookingToken: String!\n) {\n  item(interest: $interest, bookingToken: $bookingToken) {\n    ...PlacesRoute_item\n  }\n}\n\nfragment Map_places on Route {\n  interests {\n    name\n    coords {\n      lat\n      lon\n    }\n    img\n    score\n    id\n  }\n}\n\nfragment PlaceCard_places on Route {\n  interests {\n    name\n    address\n    id\n  }\n}\n\nfragment PlacesRoute_item on Item {\n  route {\n    ...Map_places\n    ...PlaceCard_places\n    destination {\n      city\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '966ac9de0fd146558d249baa1f21d232';
export default node;
