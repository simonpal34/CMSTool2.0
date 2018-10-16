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
  url: string;
  public profile: Profile;


  constructor(protected http: HttpClient, public toastr: ToastrManager) {
    this.url = 'https://usafacts-api-staging.azurewebsites.net/api/v2/authentication';
    this.isLoggedIn = false;
  }
  login(Username: string, Password: string): Promise<boolean>{
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Profile>(this.url, JSON.stringify({ Username, Password }), { headers: header }).toPromise()
      .then(response => {
        this.isLoggedIn = true;
        this.profile = response;
        //Clear the password field
        this.profile.Password = String(' ').repeat(8);  //set password to a string of 8 spaces
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

  public async UpdateProfile(): Promise<boolean> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<boolean>(this.url + '/UpdateProfile', JSON.stringify(this.profile), { headers: header }).toPromise()
      .then(response => {
        this.toastr.successToastr(this.profile.FirstName + ' your profile has been updated!', 'Success!', { toastTimeout: 10000 });
        return Promise.resolve(true);
      })
      .catch((error: HttpErrorResponse) => {
          this.toastr.errorToastr('Profile update failed with error: ' + error.message, 'Oops!', { toastTimeout: 10000 });
          return Promise.resolve(false);
      });
  }
}
