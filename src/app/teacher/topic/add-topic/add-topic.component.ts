import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})

export class AddTopicComponent implements OnInit {
  subjectId!: string | null;
  topicForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1)]]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly topicService: TopicService
  ) { }

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id');
  }

  get f() {
    return this.topicForm.controls;
  }

  submit() {
    if(this.topicForm.invalid) {
      return;
    }

    const { name } = this.topicForm.value;

    this.topicService.createTopic(name, this.subjectId).subscribe(() => {
      this.router.navigate([`/teacher/subjects/${this.subjectId}/topics`]);
    });
  }

}
