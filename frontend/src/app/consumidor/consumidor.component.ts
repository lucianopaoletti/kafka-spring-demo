import { Component } from '@angular/core';

import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-consumidor',
  standalone: true,
  imports: [NzListModule],
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.scss'
})
export class ConsumidorComponent {
  eventos: string[] = [];
}
