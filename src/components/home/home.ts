import {Component} from '@angular/core'
import {NgClass} from '@angular/common';
import {PaperButton} from '../polymer/paper-button'
import {ShopInput} from '../polymer/shop-input'

@Component({
  selector: 'app-home',
  template: `
    <h1>My First {{name}} {{1+1}} App</h1>
    <paper-button value="ほげほげ" (click)="onClick()"></paper-button>
    <paper-button value="ほげほげ" ngClass="hogehoge" (click)="onClick()"></paper-button>
    <shop-input
      id="hoge"
      name="hoge"
      type="text"
      placeholder="User Name"
      [(bindModelData)]="name">
    </shop-input>
    `,
  styles: [`
    .hogehoge {
      background-color: #f00;
      color: #000;
    }
  `],
  directives: [PaperButton, ShopInput, NgClass]
})

export class HomeComponent {
  public name = 'Angular';

  onClick() {
    console.log('コンソールログ')
    console.log(this.name);
  }
}
　