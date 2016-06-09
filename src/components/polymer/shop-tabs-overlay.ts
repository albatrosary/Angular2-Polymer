import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'shop-tabs-overlay',
  template: ``,
  styles: [`
    :host {
      position: absolute;
      display: none;
      pointer-events: none;
      opacity: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition-property: top, right, bottom, left, opacity;
    }
  `]
})

export class ShopTabsOverlay {
}
　