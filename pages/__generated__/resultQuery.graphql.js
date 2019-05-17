/**
 * @flow
 * @relayHash 40c47cf0a0de0c485781389199ab0ae2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SearchParams = {|
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
  dateFrom: string,
  dateTo: string,
  returnFrom?: ?string,
  returnTo?: ?string,
  flyFrom: string,
  flyTo?: ?string,
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
  +search: ?$ReadOnlyArray<?{|
    +price: ?number,
    +bookingToken: ?string,
    +route: ?$ReadOnlyArray<?{|
      +from: ?{|
        +city: ?string,
        +iata: ?string,
        +timeLocal: ?number,
      |},
      +to: ?{|
        +city: ?string,
        +iata: ?string,
        +timeLocal: ?number,
      |},
      +parts: ?$ReadOnlyArray<?{|
        +type: ?string,
        +carrier: ?string,
        +from: ?{|
          +timeLocal: ?number
        |},
        +to: ?{|
          +timeLocal: ?number
        |},
      |}>,
      +interests: ?$ReadOnlyArray<?{|
        +name: string
      |}>,
    |}>,
  |}>
|};
export type resultQuery = {|
  variables: resultQueryVariables,
  response: resultQueryResponse,
|};
*/


/*
query resultQuery(
  $params: SearchParams!
) {
  search(params: $params) {
    price
    bookingToken
    route {
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
        type
        carrier
        from {
          timeLocal
        }
        to {
          timeLocal
        }
      }
      interests {
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "params",
    "type": "SearchParams!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timeLocal",
  "args": null,
  "storageKey": null
},
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
  (v1/*: any*/)
],
v3 = [
  (v1/*: any*/)
],
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "search",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "params",
        "variableName": "params"
      }
    ],
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
                "name": "type",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "carrier",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "from",
                "storageKey": null,
                "args": null,
                "concreteType": "PartRendezvous",
                "plural": false,
                "selections": (v3/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "to",
                "storageKey": null,
                "args": null,
                "concreteType": "PartRendezvous",
                "plural": false,
                "selections": (v3/*: any*/)
              }
            ]
          },
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
              }
            ]
          }
        ]
      }
    ]
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
    "selections": (v4/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "resultQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "resultQuery",
    "id": null,
    "text": "query resultQuery(\n  $params: SearchParams!\n) {\n  search(params: $params) {\n    price\n    bookingToken\n    route {\n      from {\n        city\n        iata\n        timeLocal\n      }\n      to {\n        city\n        iata\n        timeLocal\n      }\n      parts {\n        type\n        carrier\n        from {\n          timeLocal\n        }\n        to {\n          timeLocal\n        }\n      }\n      interests {\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71188e1da88d12fecd3bfec3cf41ec47';
module.exports = node;
