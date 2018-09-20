import { Component } from '@angular/core';
import { ServiceMaster } from '../services/serviceMaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  isUserLoggedIn: boolean;
  constructor(private svc: ServiceMaster, private router: Router) {
    this.title = 'USA Facts CMS';
    
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.svc.logout().then(response => {
      if (response == false) {
        this.router.navigate(['/login']);
      }
    })
  }

}
