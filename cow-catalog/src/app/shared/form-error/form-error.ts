import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  imports: [],
  templateUrl: './form-error.html',
  styleUrl: './form-error.scss',
})
export class FormError {
  @Input() control!: AbstractControl | null;
  @Input() label: string = ''; // field label

  /**
   * Returns the error message for the given control.
   */
  get errorMessage(): string | null {
    if (!this.control || !this.control.errors || !this.control.touched) {
      return null;
    }

    const { errors } = this.control;
    const { required } = errors || {};

    if (required) {
      return `${this.label || 'This field'} is required`;
    }

    return null; // default fallback
  }

}
