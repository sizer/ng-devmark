import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-devmark',
  template: `
    <div
      (click)="hideDevmark()"
      [ngClass]="{ 'hidden': clicked }">
      devmark works!
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

  constructor() { }

  ngOnInit() {
  }

  hideDevmark() {
    this.clicked = true
  }
}
