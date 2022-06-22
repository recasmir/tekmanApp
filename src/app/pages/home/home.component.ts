import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessions } from 'src/app/models/sessions.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentSession: Sessions;
  showPlay!: boolean;
  showShuffle!: boolean;
  showNext!: boolean;

  constructor(private router: Router) {
    this.currentSession = JSON.parse(localStorage.getItem('Current_Session')!) || {};
    console.log(this.currentSession);
   }

  ngOnInit(): void {
  }

  playSession(){
    this.router.navigate(['play']);
  }

}
