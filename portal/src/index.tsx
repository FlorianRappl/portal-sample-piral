import "core-js/es7/reflect";
import "zone.js/dist/zone";

import {
  renderInstance,
  requestPiletsFromGraphQL,
  setupGqlClient
} from "piral";
import { createNgApi } from "piral-ng";
import { layout, errors } from "./layout";

export { PiletApi, PageComponentProps, TileComponentProps } from "piral";

const gql = setupGqlClient({
  url: "http://localhost:9000/",
  subscriptionUrl: false
});

renderInstance({
  settings: {
    gql
  },
  extendApi: [createNgApi()],
  layout,
  errors,
  requestPilets() {
    return requestPiletsFromGraphQL(gql);
  }
});
