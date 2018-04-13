import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  itemTitle: string;
  itemIcon: string;
  itemNote: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.itemTitle = navParams.get('itemTitle');
    this.itemIcon = navParams.get('itemIcon');
    this.itemNote = navParams.get('itemNote');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
