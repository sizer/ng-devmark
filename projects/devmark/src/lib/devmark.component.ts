import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-devmark',
  templateUrl: './devmark.component.html',
  styleUrls: [
    './devmark.component.css',
    './github-fork-ribbon.component.css'
  ]
})
export class DevmarkComponent implements OnInit {
  clicked = false;
  @Input() disable = false;
  @Input() displayText = 'devmark works!';

  constructor() { }

  ngOnInit() { }

  hideDevmark() {
    this.clicked = true;
  }
}
