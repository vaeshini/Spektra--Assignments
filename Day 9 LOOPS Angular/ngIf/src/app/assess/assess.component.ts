import { Component } from '@angular/core';

@Component({
  selector: 'app-assess',
  templateUrl: './assess.component.html',
  styleUrls: ['./assess.component.css']
})
export class AssessComponent {
  selectedOption : string = "";
  onSelect(option : string){
    this.selectedOption = option;
  }

}
