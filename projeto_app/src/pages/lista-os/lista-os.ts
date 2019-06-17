import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaOsProvider } from '../../providers/lista-os/lista-os';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { ModalOsPage } from '../modal-os/modal-os';
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

  listOrderService: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public listOS: ListaOsProvider,public modalCtrl: ModalController) {

  }

  openModal(item) {

    let profileModal = this.modalCtrl.create(ModalOsPage, {id: item.idOrdemServico});
    profileModal.present();

    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
  }


  ionViewDidLoad() {
    this.getServiceOrder();
  }

  getServiceOrder() {
    this.listOS.getServicesOrder().subscribe(
      (data : any) => {
        console.log('Data', data.results);
        if(data.status === 200 && data.results.length > 0) {
          this.listOrderService = data.results;
        } else {

        }
      },
    )
  }
}