import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingg-app';
  constructor(private router:Router){}
  getemployee()
  {
     this.router.navigate(['employeelink']);
  }
    getemployeedetails()
    {
      this.router.navigate(['employeedetails']);
    }

    
  }

