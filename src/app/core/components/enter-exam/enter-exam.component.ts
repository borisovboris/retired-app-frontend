import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-enter-exam',
  templateUrl: './enter-exam.component.html',
  styleUrls: ['./enter-exam.component.css']
})
export class EnterExamComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

}
