import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SubjectsComponent } from './subject/subjects.component';
import { TeacherService } from './services/teacher.service';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { SubjectTeachersComponent } from './subject-teachers/subject-teachers.component';
import { TopicsComponent } from './topics/topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';


@NgModule({
  declarations: [
    SubjectsComponent, 
    AddSubjectComponent, 
    SubjectDetailsComponent, 
    AddTeacherComponent, 
    SubjectTeachersComponent, TopicsComponent, AddTopicComponent, TopicDetailsComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class TeacherModule { }
