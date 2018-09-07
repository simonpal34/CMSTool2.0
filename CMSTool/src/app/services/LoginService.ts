import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras  } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../Models/Profile';

@Injectable()
export class LoginService {
  isLoggedIn: boolean;
  public profile: Profile;

  constructor(protected http: HttpClient) {
    this.isLoggedIn = false;
  }
  login(Username: string, Password: string): Promise<boolean>{
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Profile>('http://usafacts-api-staging.azurewebsites.net/api/v2/authentication', JSON.stringify({ Username, Password }), { headers: header }).toPromise()
      .then(response => {
        this.isLoggedIn = true;
        this.profile = response;
        return Promise.resolve(this.isLoggedIn);


      })
      .catch(error => {
        this.isLoggedIn = false;
        return Promise.resolve(this.isLoggedIn);
      });
  }
  
}
