import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { ApiProvider } from '../providers/api.provider';
import { WebRequestProvider } from '../providers/webrequest.provider';
import { HelperProvider } from '../providers/helper.provider';
import { ContactServiceProvider } from '../providers/contact.service.provider';
import { ConstantsProvider } from '../providers/constants.provider';
import { WebRequestProcessor } from '../processors/webrequest.processor';

import { AppComponent } from './app.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavComponent } from '../components/nav/nav.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ContentAreaComponent } from '../components/content-area/content-area.component';
import { CargocanalEventComponent } from '../components/cargocanal-event/cargocanal-event.component';
import { MediaAreaComponent } from '../components/media-area/media-area.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { TermsofserviceComponent } from '../components/termsofservice/termsofservice.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    ContentAreaComponent,
    CargocanalEventComponent,
    MediaAreaComponent,
    DialogComponent,
    TermsofserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    HttpClientModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
			apiKey: 'AIzaSyA2tgD5aHakakIM-B-AMjEoqUnI_UpuSbA' // production key
			// apiKey: 'AIzaSyACUBbhWj2AZpFTGKVu9czrVnKY73V-R3w' // test key
		}),
  ],
  providers: [
    ApiProvider,
    WebRequestProvider,
    HelperProvider,
    WebRequestProcessor,
    ContactServiceProvider,
    ConstantsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
