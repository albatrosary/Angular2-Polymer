import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'paper-input',
  template: ``,
  styles: [`
  :host {
    background-color: #fff;
    color: #eee;
  }
  `]
})

export class PaperInput {
  @Input('value')
  valueName: string;
}
　