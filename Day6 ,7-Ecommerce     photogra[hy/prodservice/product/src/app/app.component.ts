import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assign2';
  constructor(private router:Router){}
  ngOnInit(): void {
      
  }

  getProduct(){
    this.router.navigate(['productLink']);
  }
  getCart(){
    this.router.navigate(['cartLink']);
  }
}
