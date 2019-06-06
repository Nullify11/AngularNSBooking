import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'ns-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css'],
  moduleId: module.id,
})

export class EventOverviewComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) {

  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }
}
