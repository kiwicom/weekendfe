/**
 * @flow
 * @relayHash 3be55a360339273d7765a34b638a4713
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Map_places$ref = any;
type PlaceCard_places$ref = any;
export type placesQueryVariables = {|
  interest: string,
  bookingToken: string,
|};
export type placesQueryResponse = {|
  +item: ?{|
    +price: ?number,
    +route: ?$ReadOnlyArray<?{|
      +destination: ?{|
        +city: ?string,
        +country: ?string,
      |},
      +$fragmentRefs: Map_places$ref & PlaceCard_places$ref,
    |}>,
  |}
|};
export type placesQuery = {|
  variables: placesQueryVariables,
  response: placesQueryResponse,
|};
*/


/*
query placesQuery(
  $interest: String!
  $bookingToken: String!
) {
  item(interest: $interest, bookingToken: $bookingToken) {
    price
    route {
      ...Map_places
      ...PlaceCard_places
      destination {
        city
        country
      }
    }
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
  }
}

fragment PlaceCard_places on Route {
  interests {
    name
    address
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
},
v3 = {
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "country",
      "args": null,
      "storageKey": null
    }
  ]
};
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
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "route",
            "storageKey": null,
            "args": null,
            "concreteType": "Route",
            "plural": true,
            "selections": [
              (v3/*: any*/),
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
          (v2/*: any*/),
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
                    "name": "address",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              (v3/*: any*/)
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
    "text": "query placesQuery(\n  $interest: String!\n  $bookingToken: String!\n) {\n  item(interest: $interest, bookingToken: $bookingToken) {\n    price\n    route {\n      ...Map_places\n      ...PlaceCard_places\n      destination {\n        city\n        country\n      }\n    }\n  }\n}\n\nfragment Map_places on Route {\n  interests {\n    name\n    coords {\n      lat\n      lon\n    }\n    img\n    score\n  }\n}\n\nfragment PlaceCard_places on Route {\n  interests {\n    name\n    address\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1a2626eca89e08f84b3c5f73c49287b8';
module.exports = node;
