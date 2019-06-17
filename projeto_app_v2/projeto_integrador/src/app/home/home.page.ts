import { Component } from '@angular/core';
import { LoginService } from '../provider/login/login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: string;
  password: string;
  public loginForm: FormGroup;

  constructor (
    private logon: LoginService,
    public formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage
  ) {
    this.loginForm = formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.loginForm.invalid) {
      this.logon.singIn(this.loginForm.value.user, this.loginForm.value.password).subscribe((result) => {
        console.log('Result', result);
        if (result.results.length > 0) {
          this.router.navigateByUrl('/menu');
        }
      });
    }
  };
}
