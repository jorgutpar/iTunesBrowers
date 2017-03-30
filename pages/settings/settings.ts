import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LanguageSetting } from './language'
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [ LanguageSetting ]
})
export class SettingsPage {

  public selectCountry: any;
  public countries: any;

  select(country) {
    debugger;
    this.selectCountry = country
    // Also keep inside service
    this.setting.country = country;
  }

  constructor(private nav: NavController, private setting: LanguageSetting) {
    this.countries = setting.countries;
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad SettingsPage');
      console.log(this.countries);
  }

}
