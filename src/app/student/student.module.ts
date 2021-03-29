import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
