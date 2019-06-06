import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  constructor(private http: HttpClient) { }

  insertEvent(event: Event): Observable<Event>{
    return this.http.post<Event>('http://10.0.2.2:3000/events/add', event);
  }

  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>('http://10.0.2.2:3000/events');
  }
}
