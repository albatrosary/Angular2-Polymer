import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'shop-ripple-container',
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      display: inline-block;
      position: relative;
    }

    paper-ripple {
      color: var(--app-accent-color);
    }
  `]
})

export class ShopRippleContainer {
  @Input('value')
  valueName: string;
}
　