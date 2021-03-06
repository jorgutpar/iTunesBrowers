import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { ContactusPage } from '../pages/contactus/contactus';
import { Itunes } from '../providers/i-tunes';
import { PreviewModal } from '../pages/search/preview';
import { ToSymbolPipe } from '../providers/symbol';
import { LanguageSetting } from '../pages/settings/language'

import { ArtistPage } from '../pages/artist/artist';

import { HttpModule, JsonpModule} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        Page1,
        Page2,
        SearchPage,
        SettingsPage,
        ContactusPage,
        ArtistPage,
        PreviewModal,
        ToSymbolPipe
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        HttpModule,
        JsonpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Page1,
        Page2,
        SearchPage,
        SettingsPage,
        ContactusPage,
        ArtistPage,
        PreviewModal
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Itunes,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
