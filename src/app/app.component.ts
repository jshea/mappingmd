import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Company } from 'app/classes/company.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mapping and Material Design';

  lat: number = 33.9049418;
  lng: number = -117.9298275;
  zoomLevel: number = 14;

  companies: Company[];

  constructor(public http: Http) { }

  ngOnInit() {
    // Load the sample company data via a http call to a local json file.
    this.getDataHttp().toPromise().then(
      (data: Array<Company>) => {
        this.companies = data;
      }
    );
  }


/**
   * Get the sample company data.
   *
   * @returns {Observable<Company[]>}
   *
   * @memberOf SystemInformationService
   */
  getDataHttp(): Observable<Company[]> {

    return this.http.get('assets/data.json')
                    .map(res => res.json());
  }

}
