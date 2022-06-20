import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SessionsComponent } from './sessions/sessions.component';
import { PlayComponent } from './play/play.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SessionsComponent,
    PlayComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    SessionsComponent,
    PlayComponent,
    SettingsPageComponent
  ]
})
export class PagesModule { }
