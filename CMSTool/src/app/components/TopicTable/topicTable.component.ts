import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Topic } from '../../Models/Topic';


@Component({
  selector: 'topic-table',
  templateUrl: './topicTable.component.html',
})
export class TopicTableComponent {
  displayedColumns: string[] = ['child', 'name'];
  constructor(private svc: ServiceMaster) {

  }
  selectTopic(topic: Topic) {
    this.svc.stagingTopics = [topic];
    this.svc.trendToMetrics();
  }

}
