import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Router, RouterLink } from '@angular/router';
import { FormError } from '../../../shared/form-error/form-error';

@Component({
  selector: 'app-add-cow-form',
  imports: [
    InputTextModule, 
    ReactiveFormsModule, 
    FormsModule, 
    SelectModule, 
    ButtonModule, 
    RadioButtonModule,
    FormError,
    RouterLink
  ],
  templateUrl: './add-cow-form.html',
  styleUrl: './add-cow-form.scss',
})
export class AddCowForm {
  cowForm!: FormGroup;
  status: string[] = ['Active', 'In Treatment', 'Dead', 'Sold'];


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.cowForm = this.fb.group({
      earTag: ['', Validators.required],
      sex: ['', Validators.required],
      pen: ['', Validators.required],
      status: ['', Validators.required],
      weight: ['']
    })
  }


  submit() {
    if (!this.cowForm.valid) {
      this.cowForm.markAllAsTouched();
      return
    }

    const cows = JSON.parse(localStorage.getItem('cows') || '[]');
    cows.push({ id: cows[cows.length - 1]?.id + 1 || 1, ...this.cowForm.value, lastEventDate: new Date() });
    localStorage.setItem('cows', JSON.stringify(cows));
    this.cowForm.reset();
    this.router.navigate(['/']);
  }

}
