import { Component } from '@angular/core';
import { MdSidenavContainer, MdSidenav,
         MdButtonModule, MdCard, MdToolbar,
         MdList, MdListItem } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chris\'s sales wack-a-doodle';
  lat: number = 33.9049418;
  lng: number = -117.9298275;
  zoomLevel: number = 14;
}
