/**
 * @flow
 * @relayHash cdd050933865c449c0306a7600b7890a
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type Itinerary_flights$ref = any;
export type SearchParams = {|
  adults?: ?number,
  children?: ?number,
  dateFrom: string,
  dateTo: string,
  flyFrom: string,
  flyTo?: ?string,
  infants?: ?number,
  returnFrom?: ?string,
  returnTo?: ?string,
  stopovers: $ReadOnlyArray<Stopover>,
|};
export type Stopover = {|
  locations?: ?$ReadOnlyArray<?string>,
  nightsFrom?: ?number,
  nightsTo?: ?number,
|};
export type resultQueryVariables = {|
  params: SearchParams
|};
export type resultQueryResponse = {|
  +$fragmentRefs: Itinerary_flights$ref
|};
export type resultQuery = {|
  variables: resultQueryVariables,
  response: resultQueryResponse,
|};

/*
query resultQuery(
  $params: SearchParams!
) {
  ...Itinerary_flights_35PWgj
}

fragment Itinerary_flights_35PWgj on Query {
  search(params: $params) {
    price
    bookingToken
    route {
      ...Route_flight
      from {
        timeLocal
      }
      to {
        timeLocal
      }
    }
  }
}

fragment Route_flight on Route {
  from {
    city
    iata
    timeLocal
  }
  to {
    city
    iata
    timeLocal
  }
  parts {
    carrier
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "params",
    "type": "SearchParams!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "params",
    "variableName": "params"
  }
],
v2 = [
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
    "name": "iata",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "timeLocal",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "resultQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Itinerary_flights",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "resultQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "search",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                "selections": (v2/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "to",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteRendezvous",
                "plural": false,
                "selections": (v2/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "parts",
                "storageKey": null,
                "args": null,
                "concreteType": "Part",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "carrier",
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
    "name": "resultQuery",
    "id": null,
    "text": "query resultQuery(\n  $params: SearchParams!\n) {\n  ...Itinerary_flights_35PWgj\n}\n\nfragment Itinerary_flights_35PWgj on Query {\n  search(params: $params) {\n    price\n    bookingToken\n    route {\n      ...Route_flight\n      from {\n        timeLocal\n      }\n      to {\n        timeLocal\n      }\n    }\n  }\n}\n\nfragment Route_flight on Route {\n  from {\n    city\n    iata\n    timeLocal\n  }\n  to {\n    city\n    iata\n    timeLocal\n  }\n  parts {\n    carrier\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'f930ed9a8dc75ac7ca068ed0708b0965';
export default node;
