import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Toasted } from '../../providers/toast/toast';
import { LoginProvider } from '../../providers/login/login';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  passowrd:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private logon : LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openModalRegister() {

  }

  login(){
    this.logon.singIn(this.user, this.passowrd).subscribe(
      (data : any) => {
        console.log(data);
        if(data.response === 200) {
          alert(`Usuário: ${data.userName} logado com sucesso!`);
        } else {
          alert('deu ruim')
          alert(data.message);
        }
      },
    )
  };
}
