import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Syllabus } from 'src/app/models/syllabus.interface';
import { InteractionService } from 'src/app/services/interaction.service';

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

  constructor(private interactionService: InteractionService,
              private router: Router) { }

  ngOnInit(): void {
  }

  goToSessions(quarterId:number){
    this.router.navigate(['session']);
    this.interactionService.sendQuarterId(quarterId);
    console.log(quarterId);
  }
}
