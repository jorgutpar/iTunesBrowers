import {Pipe} from '@angular/core';
import { LanguageSetting } from '../pages/settings/language';

 @Pipe({
  name: 'toSymbol'
})
export class ToSymbolPipe {

	constructor(private settings: LanguageSetting){
	}

  transform(value, args) {
    return this.settings.country.currency || value;
  }
}