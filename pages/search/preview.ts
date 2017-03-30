import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Modal } from 'ionic-angular';
import { ActionSheetController  } from 'ionic-angular';
import { Itunes } from '../../providers/i-tunes';


@Component({
    selector: 'page-preview',
    template: `
    <ion-content padding>
        <h2>{{track.trackName}}</h2>
        <audio [src]="track.previewUrl" *ngIf="track.kind === 'song'"
        autoplay="autoplay" controls="controls">
            Browers doesn't support
        </audio>
        <video [src]="track.previewUrl" *ngIf="track.kind === 'feature-movie'"
        autoplay="autoplay" controls="controls">
            Browers doesn't support
        </video>
        <button (click)=close()>Close</button>
    </ion-content>
    `
})



export class PreviewModal {


    track: any;
    constructor(navParams: NavParams, public viewCtrl: ViewController) {
        this.track = navParams.data.track;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Modal');
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
