import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'paper-button',
  template: `{{valueName}}`,
  styles: [`
  :host {
    background-color: #555;
    color: #fff;
  }z
  `]
})

export class PaperButton {
  @Input('value')
  valueName: string;
}
　