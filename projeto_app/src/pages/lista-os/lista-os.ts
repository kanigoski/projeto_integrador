import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaOsProvider } from '../../providers/lista-os/lista-os'
/**
 * Generated class for the ListaOsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-os',
  templateUrl: 'lista-os.html',
})
export class ListaOsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public listOS: ListaOsProvider) {
  }

  ionViewDidLoad() {
    this.getServiceOrder();
  }

  getServiceOrder() {
    this.logon.singIn(this.user, this.password).subscribe(
      (data : any) => {
        console.log('Data', data);
        if(data.status === 200 && data.results.length > 0) {
          this.navCtrl.push(ListaOsPage);
        } else {
          alert('Usu[ario ou senha incorreto!')
          alert(data.message);
        }
      },
    )
  }
}
