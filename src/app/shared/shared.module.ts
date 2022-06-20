import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StatusTabletComponent } from './components/status-tablet/status-tablet.component';
import { CardsComponent } from './components/cards/cards.component';
import { SyllabusBoxComponent } from './components/syllabus-box/syllabus-box.component';



@NgModule({
  declarations: [
    StatusTabletComponent,
    CardsComponent,
    SyllabusBoxComponent
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
    SyllabusBoxComponent
  ]
})
export class SharedModule { }
