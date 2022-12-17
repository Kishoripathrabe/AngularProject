import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server>
      Hey !
    <app-server></app-server>` //for multiline expression use backtick (` `).
    // '<app-server></app-server><app-server></app-server>' if you dont want to write the content in it.
    ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
