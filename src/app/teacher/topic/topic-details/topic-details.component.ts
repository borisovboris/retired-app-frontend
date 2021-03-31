import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService } from '../../services/question.service';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  topic$: Observable<any>;
  topicId: string | null;
  questions$!: Observable<any> | null;
  selectedQuestion: any;
  showQuestionDetails: boolean = false;
  



  constructor
    (
      private readonly route: ActivatedRoute,
      private readonly topicService: TopicService,
      private readonly questionService: QuestionService,
    ) {
      //You should not, for example, fetch data in a component constructor
      //An ngOnInit() is a good place for a component to fetch its initial data.

      this.topicId = this.route.snapshot.paramMap.get('topic-id');
      this.topic$ = this.topicService.getTopics(this.topicId);
      this.questions$ = this.topicService.getTopicQuestions(this.topicId);
  }

  ngOnInit(): void {
    
  }
  

  getQuestionAnswers(questionId: number, title: string) {
    this.questionService.getQuestionAnswers(questionId).subscribe((answers) => {
      this.showQuestionDetails = true;
      this.selectedQuestion = {
        title,
        answers
      }
    });
  }

  refreshQuestions() {
    this.questions$ = this.topicService.getTopicQuestions(this.topicId);
  }

  closeQuestionDetails() {
    this.showQuestionDetails = false;
  }


}
