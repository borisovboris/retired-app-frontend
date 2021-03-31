import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { TopicsComponent } from './topics/topics.component';

import { TopicRoutingModule } from './topic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';


@NgModule({
  declarations: [
    AddTopicComponent,
    TopicDetailsComponent,
    TopicsComponent,
    AddQuestionComponent,
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    TopicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TopicModule { }
