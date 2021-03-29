import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';



@NgModule({
  declarations: [SubjectListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SubjectListComponent
  ]
})
export class SharedModule { }
