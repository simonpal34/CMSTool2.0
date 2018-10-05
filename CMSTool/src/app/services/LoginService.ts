import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras  } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../Models/Profile';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class LoginService {
  isLoggedIn: boolean;
  public profile: Profile;

  constructor(protected http: HttpClient, public toastr: ToastrManager) {
    this.isLoggedIn = false;
  }
  login(Username: string, Password: string): Promise<boolean>{
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Profile>('http://localhost:60534/api/v2/authentication', JSON.stringify({ Username, Password }), { headers: header }).toPromise()
      .then(response => {
        this.isLoggedIn = true;
        this.profile = response;
        this.toastr.successToastr('Welcome ' + response.FirstName + '!', 'Success!', { toastLife: 1000000 });
        return Promise.resolve(this.isLoggedIn);


      })
      .catch(error => {
        var err = new Error();
        err = error;
        this.isLoggedIn = false;

        if (err.message == "Http failure response for https://usafacts-api-staging.azurewebsites.net/api/v2/authentication: 403 Forbidden") {
          this.toastr.errorToastr('Invalid Username or Password ', 'Oops!', { toastLife: 10000 });
        }
        else {
          this.toastr.errorToastr('Login failed with error: ' + err.message, 'Oops!', { toastLife: 10000 });
        }
        return Promise.resolve(this.isLoggedIn);
      });
  }
  
}
