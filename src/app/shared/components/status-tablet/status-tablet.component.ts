import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-status-tablet',
  templateUrl: './status-tablet.component.html',
  styleUrls: ['./status-tablet.component.css']
})
export class StatusTabletComponent implements OnInit {

  today;

  constructor(private datePipe: DatePipe) {

    this.today=this.datePipe.transform((new Date), 'h:mm EEE LLL d');
   }

  ngOnInit(): void {
  }

}
