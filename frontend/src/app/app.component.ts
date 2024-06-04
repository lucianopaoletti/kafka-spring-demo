import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductorComponent } from './productor/productor.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductorComponent, ConsumidorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
