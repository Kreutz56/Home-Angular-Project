import { Component } from "@angular/core";

@Component({
  selector: 'market-app-root',
  template: `
  <h1>Welcome to the market!!</h1>
  <router-outlet></router-outlet>`
})

export class MarketAppComponent {}