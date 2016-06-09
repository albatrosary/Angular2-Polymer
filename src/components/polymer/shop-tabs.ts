import {Component, Input, Output, EventEmitter} from '@angular/core'
import {ShopTabsOverlay} from './shop-tabs-overlay'

@Component({
  selector: 'shop-tabs',
  template: `
    <div class="container">
      <shop-tabs-overlay id="overlay"></shop-tabs-overlay>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  `],
  directives: [ShopTabsOverlay]
})

export class ShopTabs {
}
　