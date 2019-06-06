import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../event.service'; 
import { Event } from '../event';
import { getEventOrGestureName } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  moduleId: module.id,
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.eventService.getEvents().subscribe(events => {
      this.event = events[id];
    });
  }



}
