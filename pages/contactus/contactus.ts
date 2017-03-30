import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
/*
  Generated class for the Contactus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {

  contactForm : FormGroup;

  constructor(public navCtrl: NavController, fb:FormBuilder) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

  submitForm(){
    debugger;
  }

}
