import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h1 {
    color: blue;
  }`
] // now it will take array of strings.
})
export class AppComponent {
  title = 'angular-demo';
}
