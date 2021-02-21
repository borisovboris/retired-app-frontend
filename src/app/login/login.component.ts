import { Component, OnInit } from '@angular/core';
import { ModalService } from '../core/services/modal.service';
import { ModalNames } from '../core/enums/modal-names-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openTeacherLoginModal(): void {
    this.modalService.openModal(ModalNames.TeacherLogin);
  }

  openEnterExamModal(): void {
    this.modalService.openModal(ModalNames.EnterExam);
  }

}
