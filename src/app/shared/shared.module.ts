import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SubjectListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SubjectListComponent
  ]
})
export class SharedModule { }
