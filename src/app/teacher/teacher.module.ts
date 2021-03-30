import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { SubjectTeachersComponent } from './subject-teachers/subject-teachers.component';
import { TopicsComponent } from './topics/topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SubjectsComponent, 
    AddSubjectComponent, 
    SubjectDetailsComponent, 
    AddTeacherComponent, 
    SubjectTeachersComponent, 
    TopicsComponent, 
    AddTopicComponent, 
    TopicDetailsComponent, 
    AddExamComponent, 
    AddQuestionComponent, 
    QuestionDetailsComponent, 
    ExamsComponent, 
    ExamDetailsComponent, 
    StudentsComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class TeacherModule { }
