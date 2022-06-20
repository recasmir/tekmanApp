import { Component, OnInit } from '@angular/core';
import { Syllabus } from 'src/app/models/syllabus.interface';

@Component({
  selector: 'app-syllabus-box',
  templateUrl: './syllabus-box.component.html',
  styleUrls: ['./syllabus-box.component.css']
})
export class SyllabusBoxComponent implements OnInit {

  syllabus: Syllabus[]=[
    {
      quarter:"1º Trimestre",
      sessions:"50/50",
      src:"../../../assets/tick.png"
    },
    {
      quarter:"2º Trimestre",
      sessions:"30/50",
      src:"../../../assets/circle-30.png"
    },
    {
      quarter:"3º Trimestre",
      sessions:"0/50",
      src:"../../../assets/circle-0.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
