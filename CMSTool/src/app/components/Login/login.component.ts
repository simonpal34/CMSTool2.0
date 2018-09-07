import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './Login.component.html',
})
export class LoginComponent {
    user: string;
    pass: string;
    wrongLogin: boolean;
  options: FormGroup;
  hide: boolean
 


  constructor(fb: FormBuilder , public svc: ServiceMaster, public router : Router)
    {
      this.options = fb.group({
        hideRequired: false,
        floatLabel: 'auto',
      });
        this.wrongLogin = false; 
        this.user = "";
        this.pass = "";
        this.hide = true;
    }

    async login()
    {
      var log: boolean;
      this.svc.loginService.login(this.user, this.pass).then(loggedIn => {
        log = loggedIn
        this.wrongLogin = !log
        if (log) {
          this.svc.getAuthCode();
          this.router.navigate(['/staging'])
        } else {
          console.log("it did not worked");
        }


      });
        
        
        
    }

}
