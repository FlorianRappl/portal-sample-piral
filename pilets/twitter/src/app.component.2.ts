import { Component, Inject } from "@angular/core";
import { TileComponentProps } from 'portal';

@Component({
  template: `
    <h3>Twitter - Tile 2</h3>
    <button (click)="incrementCount()">
      {{ count }}
    </button>
  `
})
export class AppComponent2 {
  count: number;

  // Inject HttpClient into your component or service.
  constructor(@Inject('Props') public props: TileComponentProps) {
    this.count = 0;
  }

  public incrementCount = () => {
    this.count++;
  };
}
