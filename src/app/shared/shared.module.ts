import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StatusTabletComponent } from './components/status-tablet/status-tablet.component';
import { CardsComponent } from './components/cards/cards.component';
import { SyllabusBoxComponent } from './components/syllabus-box/syllabus-box.component';
import { SessionListComponent } from './components/session-list/session-list.component';



@NgModule({
  declarations: [
    StatusTabletComponent,
    CardsComponent,
    SyllabusBoxComponent,
    SessionListComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DatePipe
  ],
  exports:[
    StatusTabletComponent,
    CardsComponent,
    SyllabusBoxComponent,
    SessionListComponent
  ]
})
export class SharedModule { }
