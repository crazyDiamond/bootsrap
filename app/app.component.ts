import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="jumbotron">
      <h1 align="center">Welcome to</h1>
      <h1 align="center">Insurance Marketplace!</h1>
    </div>
  `,
    styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {}