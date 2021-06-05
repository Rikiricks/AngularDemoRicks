import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" routerLink="home" routerLinkActive="home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="series" routerLinkActive="active">Series</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="calendar" routerLinkActive="active">Calendar</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container">
  <router-outlet></router-outlet>
</div>
      `,
  //  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Class Examples!';
  color = 'red';
  btnClass = 'btnClick';
  btnClass2 = 'btnItalic';
  IsItalic = true;

}

// template: `<div>
//               <h1>{{title}}</h1>
//               <button class='{{btnClass}}'>Class1</button>
//               <br/>
//               <button [class]='btnClass'>Class2</button>
//               <br/>
//               <button [class.btnBorder]="true">Class3</button>
//               <br/>
//               <button [ngClass]="{'btnItalic':'IsItalic'}">Class4</button>
//             </div>
//             <div>
//             <app-style></app-style>
//             </div>
//             `,
