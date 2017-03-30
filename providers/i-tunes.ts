import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Response } from '@angular/http';
import { Lang } from '@ionic/app-scripts1';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ITunes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Itunes {

    jsonp : any;
    data: any;
    setting: any;

    constructor(jsonp: Jsonp) {
        this.jsonp = jsonp;
    }

    loadAlbums(id){
        let params = new URLSearchParams('callback=JSONP_CALLBACK&entity=album');
        params.set('id',id);
        //params.set('country', this.setting.country.code);
        return this.jsonp.request('https://itunes.apple.com/lookup', {
            search: params
        }).toPromise()
        .then((response) => response.json().results)
        .then((results) => results.filter((item) => item.collectionPrice, 'Album'));
    }

    search(keyword) {
        let params = new URLSearchParams('callback=JSONP_CALLBACK')
        params.set('term', keyword);
        return this.jsonp.request(
            'https://itunes.apple.com/search',
            {
                search: params
            }
        ).toPromise()
            .then((response) => response.json().results);
    }
}
