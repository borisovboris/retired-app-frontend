import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css']
})
export class QuestionDetailsComponent implements OnInit {
  @Input() question: any;
  @Output() closeQuestionDetailsEvent = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  closeQuestionDetails() {
    this.closeQuestionDetailsEvent.emit();
  }

}
