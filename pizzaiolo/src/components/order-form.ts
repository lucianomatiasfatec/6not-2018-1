import { Component } from '@angular/core';

@Component ({
   selector: 'order-form',
   templateUrl: 'order-form.html'
})

export class OrderFormComponent {
   public data : any = {myToggle : true}

   constructor() {

   }

   isClicked(val : boolean) {
      console.log('Vegetariano: ' + val)
   }

}