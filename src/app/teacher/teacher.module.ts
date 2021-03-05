import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeacherService } from './teacher.service';


@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  providers: [
    TeacherService
  ]
})
export class TeacherModule { }
