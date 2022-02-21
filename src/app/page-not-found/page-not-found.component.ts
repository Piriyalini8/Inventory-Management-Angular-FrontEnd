import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p style="color: red; font-size:50px; min-height:570px; text-align:center; padding-top:200px">
      404 Page Not Found
    </p>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
