import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Questions} from './model.quiz'; 


@Injectable({
  providedIn: 'root'    
})
export class QuizService {

  constructor(private httpClient:HttpClient) { }    //DI for HttpClient 


  loadQuizDetails():Observable<Questions[]>{
    return this.httpClient.get<Questions[]>("http://localhost:3000/questions");
  }
}