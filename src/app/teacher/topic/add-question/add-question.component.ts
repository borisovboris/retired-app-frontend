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

  createChoice() {
    return this.fb.group({
      text: ['', [Validators.required]],
      isCorrect: [false]
    })
  }

  createForm() {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      type: ['', Validators.required],
      maxPoints: ['', [Validators.required]],
      choices: this.fb.array([this.createChoice()])
    });
  }

  get f() {
    return this.form.controls;
  }
  
  get choicesControls() {
    return (this.form.get("choices") as FormArray).controls;
  }

  choices() {
    return (this.form.get("choices") as FormArray)
  }

  addChoice() {
    if(this.choices().length + 1 > 5) {
      return;
    }
    this.choices().push(this.createChoice());
  }

  removeChoice(index: number) {
    this.choices().removeAt(index);
  }
  
  submitQuestion() {
    /*
    1. A closed question must have at least 2 choices.
    2. A closed question must have at least 1 correct choice.
    */
    this.formSubmitted = true;
    const formValue = this.form.value;

    if(this.form.invalid) {
      
      if(!(formValue.type === "open" && formValue.title.length >= 5)) {
        return;
      }
    }

    const questionType = formValue.type;

    if(questionType === 'open') {
      const { title, type, maxPoints } = formValue;
      // because it is an open question, it has only one open choice
      this.question = { title, type, topicId: this.topicId, maxPoints }

    } else if (questionType === 'closed') {   
      const { title, type, choices, maxPoints } = formValue;
      const atLeastOneRightChoice = choices.some((choice: any) => choice.isCorrect === true);
      if(choices.length < 2) {
        console.log(choices.length);
        return;
      } else if (!atLeastOneRightChoice) {
        return;
      }
      this.question = { title, type, topicId: this.topicId, choices, maxPoints};

    }

    this.questionService.createQuestion(this.question).subscribe(() => {
      //inform parent that a question is created and refresh questions
      this.newQuestionEvent.emit();
      //refresh form
      this.form = this.createForm();
    });
  }

}
