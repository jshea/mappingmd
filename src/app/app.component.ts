import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mapping and Material Design';

  lat: number = 33.9049418;
  lng: number = -117.9298275;
  zoomLevel: number = 14;

  data = [
    {line1: 'One',   line2: '1'},
    {line1: 'Two',   line2: '2'},
    {line1: 'Three', line2: '3'},
    {line1: 'Four',  line2: '4'},
    {line1: 'Five',  line2: '5'},
    {line1: 'Six',   line2: '6'}
  ];
}
