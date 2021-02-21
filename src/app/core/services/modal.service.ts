import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalAction } from '../enums/modal-actions-enum';
import { ModalNames } from '../enums/modal-names-enum';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  private modalSource = new Subject<Array<string>>();
  modalMessenger$ = this.modalSource.asObservable();

  constructor() { }

  openModal(componentName: ModalNames): void {
    this.modalSource.next([ModalAction.Open, componentName]);
  }

  closeModal(): void {
    this.modalSource.next([ModalAction.Close]);
  }
  
}


