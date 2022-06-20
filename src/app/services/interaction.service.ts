import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // private subject$ = new Subject<number>();

  private dataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  quarterId: Observable<number> = this.dataSource.asObservable();

  constructor() { }

  // sendQuarterId(id:number){
  //   this.subject$.next(id);
  // }

  // getQuarterId(): Observable<number>{
  //   return this.subject$.asObservable();
  // }

  sendQuarterId(quarterId:number){
    this.dataSource.next(quarterId)
  }

}
