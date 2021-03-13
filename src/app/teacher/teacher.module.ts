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


@NgModule({
  declarations: [
    SubjectsComponent, 
    AddSubjectComponent, 
    SubjectDetailsComponent, 
    AddTeacherComponent, 
    SubjectTeachersComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TeacherService
  ]
})
export class TeacherModule { }
