import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  options: FormGroup;


  constructor(protected svc: ServiceMaster, fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: 'auto',
    });

  }
}
