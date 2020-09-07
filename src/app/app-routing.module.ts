import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentAreaComponent } from 'src/components/content-area/content-area.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { MediaAreaComponent } from 'src/components/media-area/media-area.component';
import { CargocanalEventComponent } from 'src/components/cargocanal-event/cargocanal-event.component';
import { TermsofserviceComponent } from 'src/components/termsofservice/termsofservice.component';

const routes: Routes = [
  { path: '', component: ContentAreaComponent },  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: MediaAreaComponent },
  { path: 'cargocanal', component: CargocanalEventComponent },
  { path: 'terms&conditions', component: TermsofserviceComponent },
  { path: 'home', component: ContentAreaComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
