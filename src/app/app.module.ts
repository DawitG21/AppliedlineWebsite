import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';




import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		ContentAreaComponent,
		FooterComponent,
		AboutComponent,
		ContactComponent,
	],
	imports: [
		BrowserModule, Ng2CarouselamosModule, FormsModule, AgmCoreModule.forRoot({
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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
