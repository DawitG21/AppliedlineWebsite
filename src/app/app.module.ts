import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


import { ApiProvider } from '../providers/api.provider';
import { WebRequestProvider } from '../providers/webrequest.provider';
import { HelperProvider } from '../providers/helper.provider';
import { ContactServiceProvider } from '../providers/contact.service.provider';
import { ConstantsProvider } from '../providers/constants.provider';
import { WebRequestProcessor } from '../processors/webrequest.processor';


import { AppComponent } from './app.component';
import { NavComponent } from '../pages/nav/nav.component';
import { ContentAreaComponent } from '../pages/content-area/content-area.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { DailogComponent } from '../pages/dialogs/dialog.component';


@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		ContentAreaComponent,
		FooterComponent,
		AboutComponent,
		ContactComponent,
		DailogComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		Ng2CarouselamosModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyC5TiZoTEwEcB_HUZRhe_rXrcSWW1Z5x8I'
		}),
		RouterModule.forRoot([
			{
				path: '',
				component: ContentAreaComponent
			},
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'contact',
				component: ContactComponent
			}
		])
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
