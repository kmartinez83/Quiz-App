export class Questions {
    id:number;
    question: string;
    ansList:string [];
    answer: string;

    constructor( id: number, question: string, ansList: string[], answer:string){
        this.id = id;
        this.question = question;
        this.ansList= ansList;
        this.answer = answer;
    }
}

export class Answers {
    option: String[];

    constructor(option: string []){
        this.option = option;
    }
}