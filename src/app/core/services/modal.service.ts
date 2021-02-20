import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalAction } from '../enums/modal-actions-enum';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  private modalSource = new Subject<Array<string>>();
  modalMessenger$ = this.modalSource.asObservable();

  constructor() { }

  openModal(componentName: string): void {
    this.modalSource.next([ModalAction.Open, componentName]);
  }

  closeModal(componentName: string): void {
    this.modalSource.next([ModalAction.Close, componentName]);
  }
  
}


