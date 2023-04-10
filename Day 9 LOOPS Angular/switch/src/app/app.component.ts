import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loop';
  countries:string[]=['India','US','US','Canada'];
  selectedCountry:string='';

  onSelect(){
    console.log(this.selectedCountry);
  }
}
