import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionsSearchResponse } from '../models/sessions.interface';
import { SyllabusSearchResponse } from '../models/syllabus.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getSyllabus(){
    return this.http.get<SyllabusSearchResponse>(`${environment.SYLLABUS_API}`)
  }

  getSessions(quarterId: number){

    // switch(quarterId){

    //   case 0:
    //     return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_1}`);
    //     break;
    //   case 1:
    //     return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_2}`);
    //     break;
    //   case 2:
    //     return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_3}`);
    //     break;
    // }

    // if(quarterId == 0){
    //   return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_1}`);
    // }else if(quarterId == 1){
    //   return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_1}`);
    // }else if(quarterId == 2){
    //   return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_1}`);
    // }else{
    //   return
    // }
  }

  getQuarter1Sessions(){
    return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_1}`);
  }

  getQuarter2Sessions(){
    return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_2}`);
  }

  getQuarter3Sessions(){
    return this.http.get<SessionsSearchResponse>(`${environment.BACKEND_API_QUARTER_3}`);
  }

}
