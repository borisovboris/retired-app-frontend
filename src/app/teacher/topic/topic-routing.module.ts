import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { TopicsComponent } from './topics/topics.component';
// { path: ':id/topics/add-topic', component: AddTopicComponent },
    // { path: ':id/topics/:topic-id', component: TopicDetailsComponent},
    // { path: ':id/topics', component: TopicsComponent},

const routes: Routes = [
  { path: '', children: [
    { path: 'add-topic', component: AddTopicComponent },
    { path: ':topic-id', component: TopicDetailsComponent },
    { path: '', component: TopicsComponent, pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
