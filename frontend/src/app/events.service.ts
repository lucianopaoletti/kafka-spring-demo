import { Injectable } from '@angular/core';
import { SseClient } from 'ngx-sse-client';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private sseClient: SseClient) {}

  getEvents() {
    return this.sseClient
      .stream(
        'http://localhost:8081/events',
        {
          keepAlive: true,
          reconnectionDelay: 1_000,
          responseType: 'event',
        },
        {},
        'GET'
      )
      .pipe(
        tap(e => console.log(e)),
        map((e) => {
          if (e.type === 'error') {
            throw new Error((e as ErrorEvent).error);
          }

          return (e as MessageEvent<string>).data;
        })
      );
  }
}
