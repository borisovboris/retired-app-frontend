import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectsComponent } from './subject/subjects.component';

const routes: Routes = [{
  path: '', children: [
    { path: ':id', component: SubjectDetailsComponent},
    { path: 'add', component: AddSubjectComponent },
    { path: '', component: SubjectsComponent, pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
