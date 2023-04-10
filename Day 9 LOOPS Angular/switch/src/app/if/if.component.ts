import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent {
  countries:string[]=['India','US','UK','Canada'];
  selectedCountry:string='';

  onSelect(){
    console.log(this.selectedCountry);
  }

}
