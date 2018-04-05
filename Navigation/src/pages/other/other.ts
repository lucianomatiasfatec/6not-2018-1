import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class OtherPage {

  constructor(public navCtrl: NavController, public params: NavParams) {

  }

  goBack() {
    this.navCtrl.pop();
  }

  // ionPageWillEnter() foi renomeado para ionViewWillEnter nas versões
  // mais recentes do Ionic
  ionViewWillEnter() {
    console.log('Entrou em OtherPage');
  }

}
