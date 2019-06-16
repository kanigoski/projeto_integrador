import { Component } from '@angular/core';
import { LoginService } from '../provider/login/login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: string;
  password: string;
  public loginForm: FormGroup;

  constructor(private logon: LoginService, formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    if (!this.loginForm.invalid) {
      this.logon.singIn(this.loginForm.value.user, this.loginForm.value.password).subscribe((result) => {
        if(result.results.length > 0) {
          this.router.navigateByUrl('/menu');
        }
      });
    }
  };
}
