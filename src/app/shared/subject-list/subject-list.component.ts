import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  @Input() subjects$!: Observable<any>;
  occupation!: string;
  occupationSubscription!: Subscription;
  
  constructor
  (
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.occupationSubscription = this.authService.checkUserOccupation().subscribe((data) => { 
      this.occupation = data.occupation;
    });
  }

}
