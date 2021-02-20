import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { ModalAction } from './core/enums/modal-actions-enum';
import { ModalNames } from './core/enums/modal-names-enum';
import { ModalService } from './core/services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'exam-app';
  componentToLoad: any = null;
  @ViewChild('wrapper') wrapper: ElementRef | undefined;
  @ViewChild('modalTemp', { read: ViewContainerRef }) private modalVcr: ViewContainerRef | undefined;

  constructor(private cfr: ComponentFactoryResolver, modalService: ModalService) {
    modalService.modalMessenger$.subscribe(data => {
      const action: string = data[0];

      if (action === ModalAction.Close) {
           this.removeModalComponent();
        return;
      } else if (action === ModalAction.Open) {
        const componentName: string = data[1];
        this.loadModalComponent(componentName);
        return;
      }

    });
  }
  async loadModalComponent(componentName: string) {
    const wrapper = this.wrapper?.nativeElement;

    this.modalVcr?.clear();

    switch (componentName) {
      case (ModalNames.TeacherLogin):
        const { TeacherLoginComponent } = await import('./core/components/teacher-login/teacher-login.component');
        this.componentToLoad = TeacherLoginComponent;
        break;
    }

    this.modalVcr?.createComponent(
      this.cfr.resolveComponentFactory(this.componentToLoad)
    );

  }

  removeModalComponent() {
    this.modalVcr?.clear();
  }

}


