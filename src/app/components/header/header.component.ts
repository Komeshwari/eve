import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string = ''; 
}
