import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StatusTabletComponent } from './components/status-tablet/status-tablet.component';



@NgModule({
  declarations: [
    StatusTabletComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DatePipe
  ],
  exports:[
    StatusTabletComponent
  ]
})
export class SharedModule { }
