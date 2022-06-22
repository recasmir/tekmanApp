import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessions } from 'src/app/models/sessions.interface';
import { Syllabus } from 'src/app/models/syllabus.interface';
import { ApiCallService } from 'src/app/services/api-call.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  quarterId:number = 0;
  syllabus!: Syllabus;
  sessions!: Sessions[];
  currentSession!: Sessions;
  eye:string = '';

  constructor(private interactionService: InteractionService,
              private apiCallService: ApiCallService,
              private router: Router) {

    this.interactionService.quarterId.subscribe(id => {
      this.quarterId = id;
    })
   }

  ngOnInit(): void {
    this.showSyllabusBox();
    this.showSessionsList(this.quarterId);
    // this.checkWatched();

  }

  showSyllabusBox(){
    this.apiCallService.getSyllabus()
      .subscribe( resp => {
        this.syllabus = resp.syllabus[this.quarterId];
      })
  }

  showSessionsList(quarterId:number){

    switch(quarterId){
      case 0:
        this.apiCallService.getQuarter1Sessions()
        .subscribe(resp =>{
          this.sessions = resp.results;
        })
      break;
      case 1:
        this.apiCallService.getQuarter2Sessions()
        .subscribe(resp =>{
          this.sessions = resp.results;
        })
      break;
      case 2:
        this.apiCallService.getQuarter3Sessions()
        .subscribe(resp =>{
          this.sessions = resp.results;
        })
      break;
    }

  }

  watchSession(quarter:string, id:number, subject:string){
    this.router.navigate(['play']);

    this.currentSession={
      quarter,
      id,
      subject,
      watched: true
    }

    localStorage.setItem('Current_Session', JSON.stringify(this.currentSession))
  }

  // this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];

  // localStorage.setItem('Signed up users', JSON.stringify(this.signedUpUsers));


  checkWatched(){

    // for(let session of newList){
    //   if(session.watched==false){
    //     this.eye = '../../../assets/no-eye.png';
    //   }else{
    //     this.eye = '../../../assets/eye.png';
    //   }
    // }
  }

}
