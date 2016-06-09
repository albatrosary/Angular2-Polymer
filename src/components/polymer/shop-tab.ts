import {Component, Input, Output, EventEmitter} from '@angular/core'
import {ShopRippleContainer} from './shop-ripple-container'

@Component({
  selector: 'shop-tab',
  template: `
    <div id="overlay"></div>
    <shop-ripple-container>
      <ng-content></ng-content>
    </shop-ripple-container>
    `,
  styles: [`
    [hidden] {
      display: none !important;
    }

    :host {
      display: inline-block;
      position: relative;
    }

    #overlay {
      pointer-events: none;
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      @apply(--shop-tab-overlay);
    }

    :host(.shop-tabs-overlay-static-above) #overlay {
      display: block;
    }
  `],
  directives: [ShopRippleContainer]
})

export class ShopTab {}
　