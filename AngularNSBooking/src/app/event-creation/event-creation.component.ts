import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Event } from '../event';
import { ModalDialogService } from 'nativescript-angular/directives/dialogs';
import { DatepickerModalComponent } from '../datepicker-modal/datepicker-modal.component';
import { EventService } from '../event.service';

@Component({
  selector: 'ns-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css'],
  moduleId: module.id,
})
export class EventCreationComponent implements OnInit {

  event: Event = {
    id: 0,
    startDate: new Date(),
    endDate: new Date(),
    title: '',
    category: '',
    location: ''
  };

  events: Event[];

  constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef, private eventService: EventService) {
    this.events = new Array();
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  createEvent(){
    this.event.id = this.events.length;
    this.eventService.insertEvent(this.event).subscribe(response => {
      console.log(response)
    })
  }

  public showStartDateModal(){
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(DatepickerModalComponent, options).then(response => {
      this.event.startDate = response;
    });
  }

  public showEndDateModal(){
    let options = {
      context: {},
      fullscreen: false,
      viewContainerRef: this.vcRef
    };
    this.modal.showModal(DatepickerModalComponent, options).then(response => {
      this.event.endDate = response;
    });
  }
}
