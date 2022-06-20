import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  quarterId:number = 0;

  constructor(private interactionService: InteractionService) {

    this.interactionService.quarterId.subscribe(id => {
      this.quarterId = id+1;
    })
   }

  ngOnInit(): void {

  }

}
