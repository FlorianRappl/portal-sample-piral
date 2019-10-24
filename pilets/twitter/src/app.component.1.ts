import { Component, OnInit, Inject } from "@angular/core";
import { TileComponentProps } from "portal";

interface TwitterPost {
  userId: string;
  title: string;
  body: string;
}

@Component({
  template: `
    <h3>Twitter - Tile 1</h3>
    <main>
      This includes styling etc.
    </main>
    <ul>
      <li *ngFor="let item of results; let i = index">
        {{ i + 1 }} from {{ item.userId }} <b>{{ item.title }}</b>
        <p>{{ item.body }}</p>
      </li>
    </ul>
  `,
  styles: [
    `
      main {
        padding: 1em;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        margin-top: 50px;
        display: block;
      }
    `
  ]
})
export class AppComponent1 implements OnInit {
  count: number;
  results: Array<TwitterPost>;

  constructor(@Inject("Props") public props: TileComponentProps) {
    this.count = 0;
  }

  ngOnInit(): void {
    // Make the HTTP request:
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => (this.results = data.filter((_, i) => i < 5)));
  }

  public incrementCount = () => {
    this.count++;
  };
}
