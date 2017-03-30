import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    theSearchPage: any = SearchPage;
    theSettingsPage: any = SettingsPage;

    results: any;
    constructor(public navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }
 
}