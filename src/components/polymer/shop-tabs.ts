import {Component, Input, Output, EventEmitter} from '@angular/core'
import {ShopTabsOverlay} from './shop-tabs-overlay'

@Component({
  selector: 'shop-tabs',
  template: `
    <div id="container">
      <shop-tabs-overlay id="overlay"></shop-tabs-overlay>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      @apply(--layout);
      @apply(--layout-center-center);
    }

    #container {
      position: relative;
    }

    shop-tabs-overlay {
      @apply(--shop-tab-overlay);
    }
  `],
  directives: [ShopTabsOverlay]
})

export class ShopTabs {
}
　