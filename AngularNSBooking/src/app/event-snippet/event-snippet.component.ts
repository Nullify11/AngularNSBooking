import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'ns-event-snippet',
  templateUrl: './event-snippet.component.html',
  styleUrls: ['./event-snippet.component.css'],
  moduleId: module.id,
})

export class EventSnippetComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
    
  }

}
