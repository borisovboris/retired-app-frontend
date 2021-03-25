import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamsComponent } from './exams/exams.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectTeachersComponent } from './subject-teachers/subject-teachers.component';
import { SubjectsComponent } from './subject/subjects.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [{
  path: '', children: [
    { path: 'add', component: AddSubjectComponent },
    { path: ':id/teachers/add-teacher', component: AddTeacherComponent },
    { path: ':id/teachers', component: SubjectTeachersComponent },
    { path: ':id/topics/add-topic', component: AddTopicComponent},
    { path: ':id/topics/:topic-id', component: TopicDetailsComponent},
    { path: ':id/topics', component: TopicsComponent},
    { path: ':id/exams/add-exam', component: AddExamComponent},
    { path: ':id/exams/:exam-id', component: ExamDetailsComponent},
    { path: ':id/exams', component: ExamsComponent },
    { path: ':id', component: SubjectDetailsComponent },
    { path: '', component: SubjectsComponent, pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
