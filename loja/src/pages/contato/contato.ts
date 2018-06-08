import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContatoService } from './../../services/contato';

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
  providers: [
    ContatoService
  ]
})

export class ContatoPage {

  public data: any;
  public isSubmitted: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private formData: ContatoService) {    
    this.formData = formData;

    this.data = {
       name: '',
       phone: '',
       email: '',
       comment: '',
       termsAccepted: false
    };
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

  onSubmit(form) {
    this.isSubmitted = true;
    console.log('onSubmit');
    console.log(form);

    if(form.valid && form.value.termsAccepted) {        
      this.formData.name = this.data.name;
      this.formData.phone = this.data.phone;
      this.formData.email = this.data.email;
      this.formData.comment = this.data.comment;
      this.formData.registrar(this.data)
        .then((res) => {
          console.log(res);                
          this.toast('Contato registrado com sucesso.', '2000', 'top', 'success');
          //this.navCtrl.pop();
        });       
    }

  }

  noSubmit(event) {
    event.preventDefault();
  }

  debug(f) {
    console.log(f);
  }

  toast(message, duration, position, cssClass){
    let toast = this.toastCtrl.create({
        message: message,
        duration: duration,
        position: position,
        cssClass: cssClass,
        dismissOnPageChange: true,
        showCloseButton: true,
        closeButtonText: 'Ok'
    });
    toast.present();
  }


}
