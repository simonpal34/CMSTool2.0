import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  options: FormGroup;
  router: Router;

  constructor(protected svc: ServiceMaster, fb: FormBuilder, router: Router) {
    this.router = router;
    this.options = fb.group({
      floatLabel: 'auto',
    });
  }

  async Save() {
    this.svc.loginService.UpdateProfile().then(response => {
    });
  }

  Cancel() {
    this.router.navigate(['/home']);
  }
}
