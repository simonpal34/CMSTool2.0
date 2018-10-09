import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
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

    return this.http.post<Profile>('https://usafacts-api-staging.azurewebsites.net/api/v2/authentication', JSON.stringify({ Username, Password }), { headers: header }).toPromise()
      .then(response => {
        this.isLoggedIn = true;
        this.profile = response;
        this.toastr.successToastr('Welcome ' + response.FirstName + '!', 'Success!', { toastTimeout: 10000 });
        return Promise.resolve(this.isLoggedIn);


      })
      .catch((error:HttpErrorResponse) => {
        this.isLoggedIn = false;
        if (error.status == 403) {
          this.toastr.errorToastr('Invalid Username or Password ', 'Oops!', { toastTimeout: 10000 });
        }
        else {
          this.toastr.errorToastr('Login failed with error: ' + error.message, 'Oops!', { toastTimeout: 10000 });
        }
        return Promise.resolve(this.isLoggedIn);
      });
  }
  
}
