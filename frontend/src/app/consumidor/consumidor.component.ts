import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { NzListModule } from 'ng-zorro-antd/list';
import { EventsService } from '../events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consumidor',
  standalone: true,
  imports: [CommonModule, NzListModule],
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.scss',
})
export class ConsumidorComponent implements OnInit {
  constructor(private eventsService: EventsService) {}

  events: string[] = [];

  ngOnInit(): void {
    // Llamado SSE de eventos.
    // Se usa timeout para evitar que el navegador interprete que la pagina todavia no ha cargado
    // porque el GET no ha terminado de responder.
    setTimeout(() => {
      this.subscribeEvents();
    }, 500); 
  }

  private subscribeEvents() {
    this.eventsService.getEvents().subscribe({
      next: (message) => {
        this.events = [...this.events, message];
      }
    });
  }
}
