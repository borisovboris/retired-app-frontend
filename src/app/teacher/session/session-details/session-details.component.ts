import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

  session$!: Observable<any>;
  sessionId: string | null;

  constructor
  (
    private route: ActivatedRoute,
    private readonly sessionService: SessionService
  ) { 
    this.sessionId = this.route.snapshot.paramMap.get('session-id');
  }

  ngOnInit(): void {
    this.session$ = this.sessionService.getSession(this.sessionId);
  }

}
