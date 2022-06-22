import { ApiCallService } from './../../../services/api-call.service';
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

  syllabus: Syllabus[] = [];

  constructor(private interactionService: InteractionService,
              private router: Router,
              private apiCallService: ApiCallService) { }

  ngOnInit(): void {
    this.showSyllabusBox();
  }

  showSyllabusBox(){
    this.apiCallService.getSyllabus()
      .subscribe( resp => {
        this.syllabus = resp.syllabus;
      })
  }

  goToSessions(quarterId:number){
    this.router.navigate(['session']);
    this.interactionService.sendQuarterId(quarterId);
    console.log(quarterId);
  }
}
