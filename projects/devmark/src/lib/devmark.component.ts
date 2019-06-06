import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-devmark',
  template: `
    <div
      (click)="hideDevmark()"
      [ngClass]="{ 'hidden': disable || clicked }">
      {{displayText}}
    </div>
  `,
  styles: [`
    div {
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      background: red;
      width: 100px;
      height: 100px;
    }
    div:hover {
      opacity: 0.5;
    }
    .hidden {
      display: none;
    }
  `]
})
export class DevmarkComponent implements OnInit {
  clicked: boolean = false
  @Input() disable: boolean = false
  @Input() displayText: string = 'devmark works!'

  constructor() { }

  ngOnInit() { }

  hideDevmark() {
    this.clicked = true
  }
}
