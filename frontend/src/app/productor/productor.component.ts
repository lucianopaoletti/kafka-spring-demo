import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-productor',
  standalone: true,
  imports: [ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule],
  templateUrl: './productor.component.html',
  styleUrl: './productor.component.scss'
})
export class ProductorComponent {
  form = this._buildForm();

  constructor(private fb: FormBuilder) {}

  private _buildForm() {
    return this.fb.group({
      message: ['', [Validators.required]]
    });
  }

  public submitForm() {
    console.log(this.form.value);
  }
}
