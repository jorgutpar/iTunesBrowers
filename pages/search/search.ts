import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ModalController, Keyboard, AlertController } from 'ionic-angular';
import { PreviewModal  } from './preview';
import { Itunes } from '../../providers/i-tunes';
import { ArtistPage } from '../artist/artist'
import { Http } from '@angular/http';
import * as lodash from 'lodash';
import * as ProgressIndicator from '../../../plugins/org.pbernasconi.progressindicator/www/progressIndicator';
/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-search',
    templateUrl: 'search.html',
    providers: [Itunes, PreviewModal, Http]
})



export class SearchPage {


    results: any[];
    private navCtrl: NavController = null;
    keys: any[];
    keyword: string;
    http: any;
    itunes: any;
    _unfilteredResults: any[];
    usesFilter: any;
    actionSheetCtrl: any;
    modalCtrl: any;

    constructor(navCtrl: NavController, navParams: NavParams, itunes: Itunes, actionSheetCtrl: ActionSheetController, modalCtrl: ModalController, private keyboard: Keyboard, private alertCtrl: AlertController) {
        this.navCtrl = navCtrl;
        this.keyword = '';
        this.itunes = itunes;
        this.results = [];
        this._unfilteredResults = [];
        this.usesFilter = false;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
    }

    keyHasBeenPressed(ev: any) {
        debugger;
        this.keyword = ev.target.value;
        if (this.keyword === '') {
            let alert = this.alertCtrl.create({
                title: 'Empty search not allowed',
                subTitle: 'Please key in your search',
                buttons: [
                    'Cancel',
                    {
                        text: 'Search...',
                        handler: data => {
                            if (data.term) {
                                this.keyword = data.term;
                                this.search();
                            } else { return false; }
                        }
                    }
                ],
                inputs: [
                    {
                        name: 'term',
                        placeholder: 'Search for...'
                    }
                ]
            });
            alert.present();
        } else {
            this.search();
        }

    }


    openFilters() {
        let sheet = this.actionSheetCtrl.create({
            title: 'Filter by...',
            buttons: [
                {
                    text: 'Movies only',
                    handler: () => {
                        this.results = this._unfilteredResults.filter(
                            (item) => item.kind === 'feature-movie'
                        );
                    }
                },
                {
                    text: 'Songs only',
                    handler: () => {
                        this.results = this._unfilteredResults.filter(
                            (item) => item.kind === 'song'
                        );
                    }
                },
                {
                    text: 'Clear',
                    style: 'descructive',
                    handler: () => {
                        this.results = this._unfilteredResults;
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                }
            ]
        })
        sheet.present();
    }


    openPreview(track) {
        let alert = this.alertCtrl.create({
            title: 'Are you sure?',
            buttons: [
                'Nah',
                {
                    text: 'Yes!',
                    handler: () => {
                        alert.dismiss()
                            .then(() => {
                                let modal = this.modalCtrl.create(PreviewModal, {
                                    track: track
                                });
                                modal.present();
                            })
                        return false;
                    }
                }
            ]
        });
        alert.present();
    }

    reloadData(refresher) {
        this.results = [];
        this.itunes.search(this.keyword)
            .then(results => {
                refresher.complete();
                this.results = lodash.shuffle(results);
            })
    }

    search() {
      //ProgressIndicator.showBarWithLabel(true, 50000, 'Just hold on...');
        this.itunes.search(this.keyword).then((results) => {
            if (!results.length) {
                let alert = this.alertCtrl.create({
                    title: 'The iTunes API says ...',
                    subTitle: 'No match found',
                    buttons: ["I'll try again"]
                });
                alert.present();
            } else {
            this.results = results
            this._unfilteredResults = results;
            this.usesFilter = false;
          }
          //ProgressIndicator.hide();
        });
        console.log(this.results);
        console.log(this.results.length);
    }

    goToArtist(result){
        this.navCtrl.push(ArtistPage, {
            id: result.artistId,
            name: result.artistName
        });
    }


}
