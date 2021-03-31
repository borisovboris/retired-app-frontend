import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectService } from '../../services/subject.service';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  subject$: Observable<any>;
  topics$!: Observable<any>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly subjectService: SubjectService,
    private readonly topicService: TopicService
  ) {
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.subject$ = this.subjectService.getSubject(subjectId);
    this.topics$ = this.topicService.getTopicsOfSubject(subjectId);
  }

  ngOnInit(): void {
  }

}
