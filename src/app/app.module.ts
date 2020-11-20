import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { ApiProvider } from '../providers/api.provider';
import { WebRequestProvider } from '../providers/webrequest.provider';
import { HelperProvider } from '../providers/helper.provider';
import { DataProvider } from '../providers/data.provider';
import { ContactServiceProvider } from '../providers/contact.service.provider';
import { ConstantsProvider } from '../providers/constants.provider';
import { WebRequestProcessor } from '../processors/webrequest.processor';
import { DebugService } from 'src/providers/debug.service';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

import { AppComponent } from './app.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavComponent } from '../components/nav/nav.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ContentAreaComponent } from '../components/content-area/content-area.component';
import { CargocanalEventComponent } from '../components/cargocanal-event/cargocanal-event.component';
import { MediaAreaComponent } from '../components/media-area/media-area.component';
import { DialogComponent } from '../components/contact-dialog/dialog.component';
import { TermsofserviceComponent } from '../components/termsofservice/termsofservice.component';
import { LanguagesDialogComponent } from '../components/language-dialog/languages-dialog.component';
import { AvatarModule } from 'ngx-avatar';
import { BannerDialogComponent } from '../components/banner-dialog/banner-dialog.component';
import { EtIataNdcComponent } from '../components/et-iata-ndc/et-iata-ndc.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    TermsofserviceComponent,
    LanguagesDialogComponent,
    BannerDialogComponent,
    EtIataNdcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarModule,
    HttpClientModule,
    AppRoutingModule,
    NgImageSliderModule,
    NgxCaptchaModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    MatDialogModule,
    Ng2CarouselamosModule, 
    SlickCarouselModule,  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2tgD5aHakakIM-B-AMjEoqUnI_UpuSbA' // production key
      // apiKey: 'AIzaSyACUBbhWj2AZpFTGKVu9czrVnKY73V-R3w' // test key
    })
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    },
    ApiProvider,
    WebRequestProvider,
    HelperProvider,
    DataProvider,
    WebRequestProcessor,
    ContactServiceProvider,
    ConstantsProvider,
    DebugService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
