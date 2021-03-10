import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SubjectsComponent } from './subject/subjects.component';
import { TeacherService } from './teacher.service';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubjectsComponent, AddSubjectComponent],
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
