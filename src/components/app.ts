import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {ShopTab} from './polymer/shop-tab';
import {ShopTabs} from './polymer/shop-tabs';

import {HomeComponent} from './home/home';
import {Home2Component} from './home2/home2';
import {Home3Component} from './home3/home3';
import {Home4Component} from './home4/home4';



@Component({
  selector: 'my-app',
  template: `
  <shop-tabs attr-for-selected="name">
    <shop-tab class="iron-selected shop-tabs-overlay-static-above">
      <a [routerLink]="['Home']">Men's Outerwear</a>
    </shop-tab>
    <shop-tab>
      <a [routerLink]="['Home2']">Ladies Outerwear</a>
    </shop-tab>
    <shop-tab>
      <a [routerLink]="['Home3']">Men's T-Shirts</a>
    </shop-tab>
    <shop-tab class="iron-selected shop-tabs-overlay-static-above">
      <a [routerLink]="['Home4']">Ladies T-Shirts</a>
    </shop-tab>
  </shop-tabs>  
  <router-outlet></router-outlet>
  `,
  styles:[
  `.router-link-active {
    border-bottom: 2px solid #172C50;
  }`,
  `
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
  directives: [ROUTER_DIRECTIVES, NgClass, ShopTab, ShopTabs],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/home2', name: 'Home2', component: Home2Component},
  {path: '/home3', name: 'Home3', component: Home3Component},
  {path: '/home4', name: 'Home4', component: Home4Component}
])
export class AppComponent {}
　