import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Toasted } from '../../providers/toast/toast';
import { LoginProvider } from '../../providers/login/login';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  password:string;

  constructor(public navCtrl: NavController, private logon: LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openModalRegister() {

  }

  login(){
    this.logon.singIn(this.user, this.password).subscribe(
      (data : any) => {
        console.log('Data', data);
        if(data.status === 200 && data.results.length > 0) {
          this.navCtrl.push(DashboardPage);
        } else {
          alert('Login ou senhas incorretos.')
        }
      },
    )
  };
}
