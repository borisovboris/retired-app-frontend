import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

}
