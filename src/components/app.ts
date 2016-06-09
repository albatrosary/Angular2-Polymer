import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HomeComponent} from './home/home';

@Component({
  selector: 'my-app',
  template: `
  <shop-tabs attr-for-selected="name">
    <shop-tab class="">
      <a [routerLink]="['Home']">Men's Outerwear</a>
    </shop-tab>
    <shop-tab class="">
      <a [routerLink]="['Home']">Ladies Outerwear</a>
    </shop-tab>
    <shop-tab class="">
      <a [routerLink]="['Home']">Men's T-Shirts</a>
    </shop-tab>
    <shop-tab class="iron-selected shop-tabs-overlay-static-above">
      <a [routerLink]="['Home']">Ladies T-Shirts</a>
    </shop-tab>
  </shop-tabs>  
  <router-outlet></router-outlet>
  `,
  styles:[`
  #tabContainer {
    position: relative;
    height: 66px;
  }

  shop-tabs, shop-tab {
    --shop-tab-overlay: {
      border-bottom: 2px solid var(--app-accent-color);
    };
  }

  shop-tabs {
    height: 100%;
  }

  shop-tab {
    margin: 0 10px;
  }

  shop-tab a {
    display: inline-block;
    outline: none;
    padding: 9px 5px;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    color: var(--app-primary-color);
  }`],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true}
])
export class AppComponent {}
　