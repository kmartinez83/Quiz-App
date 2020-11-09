import { Component, OnInit } from '@angular/core';
import {Questions, Answers } from '../model.quiz';
import {QuizService } from '../quiz.services'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

quizlength: number;
quiz: Questions[] = [];
question: String;
option: String [] = [];
i:number = 0;


  constructor(private quizService: QuizService) { }

  ngOnInit(): void{
  }

  loadQuiz(): void{
    this.quizService.loadQuizDetails().subscribe(data => this.quiz = data);
    this.quizlength= this.quiz.length;
    this.i = 0; 
  
  }


  previousAnswer () {
    this.i --;
    //this.option = this.quiz[this.i].answer; 
    this.question = this.quiz[this.i].question;
  }

  nextAnswer() {
    this.i++;
   // this.option = this.quiz[this.i].answer; 
    this.question = this.quiz[this.i].question;
  }

  //Displaying Answers
  answers: Answers[] = [];
  check(e, str:String, answer:string){
  if (e.target.clicked){
    console.log(str+ "the answer is:" + answer);
  } else {
    this.answers.splice(0,1);
  }
}


  }