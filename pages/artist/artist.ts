import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Itunes } from '../../providers/i-tunes';

/*
  Generated class for the Artist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component ({
  selector: 'page-artist',
  templateUrl: 'artist.html',
  providers: [Itunes]
})
export class ArtistPage {

	artist:any;
	albums:any;
  constructor(public navCtrl: NavController, navParams: NavParams, itunes: Itunes) {
  	this.artist = navParams.data;
  	itunes.loadAlbums(navParams.data.id)
  	.then(albums => this.albums = albums);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistPage');
  }

}
