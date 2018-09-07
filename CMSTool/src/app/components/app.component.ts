import { Component } from '@angular/core';
import { ServiceMaster } from '../services/serviceMaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string
  isUserLoggedIn: boolean;
  constructor(private svc: ServiceMaster, private router: Router) {
    this.title = 'USA Facts Data Tool';
    
  }

  profile() {
    this.router.navigate(['/profile']);
  }

}
