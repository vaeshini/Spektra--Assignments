import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  constructor(private router:Router){}
  getproduct1()
  {
    this.router.navigate(['/product1link']);
  }
  getproduct2()
  {
    this.router.navigate(['/product2link']);

  }
  getproduct3()
  {
    this.router.navigate(['/product3link']);
  }
}
