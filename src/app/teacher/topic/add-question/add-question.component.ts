import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  form = this.createForm();
  formSubmitted: boolean = false;
  question: any;
  topicId: string | null;
  @Output() newQuestionEvent = new EventEmitter<void>();

  constructor
  (
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly questionService: QuestionService
  ) { 
    this.topicId = this.route.snapshot.paramMap.get('topic-id');
  }

  ngOnInit(): void {
  }

  createAnswer() {
    return this.fb.group({
      text: ['', [Validators.required]],
      isCorrect: [false]
    })
  }

  createForm() {
    return this.fb.group({
      questionTitle: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', Validators.required],
      answers: this.fb.array([this.createAnswer()])
    });
  }

  get f() {
    return this.form.controls;
  }
  
  get answersControls() {
    return (this.form.get("answers") as FormArray).controls;
  }

  answers() {
    return (this.form.get("answers") as FormArray)
  }

  addAnswer() {
    if(this.answers().length + 1 > 5) {
      return;
    }
    this.answers().push(this.createAnswer());
  }

  removeAnswer(index: number) {
    this.answers().removeAt(index);
  }
  
  submitQuestion() {
    /*
    1. A closed question must have at least 2 answers.
    2. A closed question must have at least 1 correct answer.
    */
    this.formSubmitted = true;
    const formValue = this.form.value;

    if(this.form.invalid) {
      
      if(!(formValue.type === "open" && formValue.questionTitle.length >= 5)) {
        return;
      }
    }

    const questionType = formValue.type;

    if(questionType === 'open') {

      const { questionTitle, type } = formValue;
      this.question = { questionTitle, topicId: this.topicId, type}
      

    } else if (questionType === 'closed') {
     
      const { questionTitle, type, answers } = formValue;
      const atLeastOneRightAnswer = answers.some((answer: any) => answer.isCorrect === true);
      if(answers.length < 2) {
        console.log(answers.length);
        return;
      } else if (!atLeastOneRightAnswer) {
        return;
      }
      this.question = { questionTitle, type, topicId: this.topicId, answers};

    }

    this.questionService.createQuestion(this.question).subscribe(() => {
      //inform parent that a question is created and refresh questions
      this.newQuestionEvent.emit();
      //refresh form
      this.form = this.createForm();
    });
  }

}
