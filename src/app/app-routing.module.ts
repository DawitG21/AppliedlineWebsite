import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentAreaComponent } from 'src/components/content-area/content-area.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { MediaAreaComponent } from 'src/components/media-area/media-area.component';
import { CargocanalEventComponent } from 'src/components/cargocanal-event/cargocanal-event.component';

const routes: Routes = [
  { path: '', component: ContentAreaComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: MediaAreaComponent },
  { path: 'cargocanal', component: CargocanalEventComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
