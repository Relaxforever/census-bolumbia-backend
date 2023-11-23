export class QuestionAnswer {
  question_id: number;
  answer: string;
}

export class QuestionaryAnswerDto {
  ecn: string; 
  answers: QuestionAnswer[];
}

  