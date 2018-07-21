import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AdvanturelabProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvanturelabProvider {

  public adventures:Observable<Object>;

  constructor(public http: HttpClient) {
  }

  getAdventures():Observable<Object>{
    return this.http.get("https://firebase.lyfx.co/adventures-lab");
  }
}
