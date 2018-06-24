import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-common-lib',
  template: `
    <p>
      my-common-lib works!
    </p>
  `,
  styles: []
})
export class MyCommonLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
