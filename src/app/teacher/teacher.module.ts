import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SubjectsComponent } from './subject/subjects.component';
import { TeacherService } from './teacher.service';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';


@NgModule({
  declarations: [SubjectsComponent, AddSubjectComponent, SubjectDetailsComponent],
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
