import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'shop-input',
  template: `
    <input
      type="{{type}}"
      name="{{name}}"
      placeholder="{{placeholder}}"
      required="{{required}}"
      aria-labelledby="accountPhoneLabel accountInfoHeading"
      [ngModel]=bindModelData
      (ngModelChange)="updateData($event)">
    <shop-md-decorator
      error-message="Invalid {{placeholder}}"
      aria-hidden="true">
      <label id="accountPhoneLabel">{{placeholder}}</label>
      <shop-underline></shop-underline>
    </shop-md-decorator>
  `,
  styles: [`
    :host {
      display: inline-block;
      margin: 20px 0;
      width: 100%;
    }

    input::-webkit-input-placeholder {
      color: transparent;
    }

    input::-moz-placeholder {
      color: transparent;
    }

    input:-ms-input-placeholder {
      color: transparent;
    }

    input::-ms-input-placeholder {
      color: transparent;
    }

    input {
      font-size: 1em;
      font-weight: 300;
      color: var(--app-primary-color);
      border: none;
      padding: 8px 0;
      width: 100%;
      outline: none;
    }

    input:invalid {
      /* reset the default style in FF */
      box-shadow: none;
    }

    shop-md-decorator {
      display: block;
      height: 1px;
      width: 100%;
      margin: auto;
      border-top: 1px solid #ccc;
      position: relative;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }

    shop-underline {
      display: block;
      height: 2px;
      width: 100%;
      margin: auto;
      background-color: var(--app-accent-color);
      position: absolute;
      top: -1px;
      left: 0;
      -webkit-transform: scale3d(0, 1, 1);
      transform: scale3d(0, 1, 1);
      transition: -webkit-transform 0.2s ease-in;
      transition: transform 0.2s ease-in;
    }

    /* input label */
    shop-md-decorator > label {
      display: block;
      pointer-events: none;
      opacity: 0.5;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      transition-property: opacity, -webkit-transform;
      transition-property: opacity, transform;
      transition-duration: 0.15s;
      transition-timing-function: ease-out;
      will-change: transform;
      -webkit-transform: translate3d(0px, -1.9em, 0px);
      transform: translate3d(0px, -1.9em, 0px);
    }

    /* Error message */
    shop-md-decorator::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      font-size: 0.65em;
      color: #dd2c00;
      content: attr(error-message);
      display: none;
      white-space: nowrap;
    }

    input:focus + shop-md-decorator > shop-underline {
      border-top:  2px solid #212121;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      transition: -webkit-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
    }

    /* Label: valid state */
    input:focus + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 0.7;
    }

    input:optional:not(:placeholder-shown) + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 0.7;
    }

    _:-ms-lang(x), input + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 0.7;
    }

    input:optional:-moz-ui-valid + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 0.7;
    }

    /* Underline */
    input:not(:focus):not(:placeholder-shown):invalid + shop-md-decorator > shop-underline {
      background-color: #dd2c00;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      transition: -webkit-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
    }

    input:not(:focus):-moz-ui-invalid:invalid + shop-md-decorator > shop-underline {
      background-color: #dd2c00;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      transition: -webkit-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
    }

    input[aria-invalid='true']:not(:valid) + shop-md-decorator > shop-underline {
      background-color: #dd2c00;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      transition: -webkit-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
    }

    /* Error message */
    input:not(:focus):not(:placeholder-shown):invalid + shop-md-decorator::after {
      display: block;
    }

    input:not(:focus):-moz-ui-invalid:invalid + shop-md-decorator::after {
      display: block;
    }

    input[aria-invalid='true']:not(:valid) + shop-md-decorator::after {
      display: block;
    }

    /* Error label */
    input:not(:focus):not(:placeholder-shown):invalid + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 1;
      color: #dd2c00;
    }

    input:not(:focus):-moz-ui-invalid:invalid + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 1;
      color: #dd2c00;
    }

    input[aria-invalid='true']:not(:valid) + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 1;
      color: #dd2c00;
    }

    /* Valid label */
    input:not(:focus):required:valid + shop-md-decorator > label {
      -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
      opacity: 0.7;
    }
  `]
})

export class ShopInput {
    @Input() name: string;
    @Input() type: string;
    @Input() required: boolean = false;
    @Input() bindModelData: any;
    @Input() placeholder: string;
    @Output() bindModelDataChange: any = new EventEmitter();
    updateData(event) {
      this.bindModelData = event;
      this.bindModelDataChange.emit(event);
    }
}
　