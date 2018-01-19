import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.interface';
import { Field } from '../../models/field.interface';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rmi-input',
  styles: ['.dynamic-field {color: red}', '.form-input {margin-left: 20px}'],
  template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input type="text" [name]="config.name" [attr.placeholder]="config.placeholder" [formControlName]="config.name" required>
      <rmi-show-errors [control]="config.name"></rmi-show-errors>
    </div>
  `
})
export class RmiInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
