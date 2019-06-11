import { Component } from "@angular/core";

@Component({
  selector:"pm-root",
  //styleUrls:[],
  template:`
    <div><h1>{{pageTitle}}</h1>
      <div>fist component</div>
    </div>
  `
})

export class AppComponent {
  pageTitle:string='Acme Product Management';
}
