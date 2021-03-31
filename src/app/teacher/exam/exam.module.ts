import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamsComponent } from './exams/exams.component';

import { ExamRoutingModule } from './exam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddExamComponent,
    ExamDetailsComponent,
    ExamsComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExamModule { }
