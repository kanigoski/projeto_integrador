import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import { TabSecundarioPage } from '../tab-secundario/tab-secundario';
import { ListaOsProvider } from '../../providers/lista-os/lista-os';

/**
 * Generated class for the ModalOsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-os',
  templateUrl: 'modal-os.html'
})

export class ModalOsPage {

  informationOS: any[];
  id: any;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public listOS: ListaOsProvider,
    navParams: NavParams

  ) {
      this.id = navParams.get('id');
      console.log(navParams.get('id'));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.getServiceOrderById(this.id);
  }

  getServiceOrderById(id) {
    this.listOS.getServicesOrderById(id).subscribe(
      (data : any) => {
        console.log('Data', data.results);
        if(data.status === 200 && data.results.length > 0) {
          this.informationOS = data.results;
        } else {

        }
      },
    )
  }
}
