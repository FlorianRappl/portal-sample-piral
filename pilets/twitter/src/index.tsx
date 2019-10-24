import { PiletApi } from "portal";
import { AppComponent1 } from "./app.component.1";
import { AppComponent2 } from "./app.component.2";

export function setup(app: PiletApi) {
  app.registerTile(
    {
      type: "ng",
      component: AppComponent1
    },
    {
      initialColumns: 8,
      initialRows: 9
    }
  );
  app.registerTile(
    {
      type: "ng",
      component: AppComponent2
    },
    {
      initialColumns: 4,
      initialRows: 3
    }
  );
}
