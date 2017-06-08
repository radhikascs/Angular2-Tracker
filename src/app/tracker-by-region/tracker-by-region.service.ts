import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { TrackerByRegion } from './tracker-by-region';
 
@Injectable()
export class TrackerByRegionService {

 private dataUrl = 'assets/data/ict_2016.json';  // URL to web api

   constructor(private http: Http) { }

   getTrackerByRegionData(): Promise<TrackerByRegion[]> {
    return this.http.get(this.dataUrl)
               .toPromise()
               .then(response => response.json() as TrackerByRegion[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSortedData(data:any, baseVal:string) {
    return data
              .sort(function(a, b) {
                var nameA = a[baseVal].toUpperCase(); // ignore upper and lowercase
                var nameB = b[baseVal].toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              ​
                // names must be equal
                return 0;
              });
        } 
}
