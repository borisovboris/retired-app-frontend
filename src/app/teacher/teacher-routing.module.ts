import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectTeachersComponent } from './subject-teachers/subject-teachers.component';
import { SubjectsComponent } from './subject/subjects.component';

const routes: Routes = [{
  path: '', children: [
    { path: 'add', component: AddSubjectComponent },
    { path: ':id/teachers/add-teacher', component: AddTeacherComponent },
    { path: ':id/teachers', component: SubjectTeachersComponent },
    { path: ':id', component: SubjectDetailsComponent },
    { path: '', component: SubjectsComponent, pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
