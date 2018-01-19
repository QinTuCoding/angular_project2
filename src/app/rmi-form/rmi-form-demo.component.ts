import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FieldConfig } from './models/field-config.interface';
import { Validators } from '@angular/forms';
import { RmiFormComponent } from './containers/rmi-form.component';

@Component({
  selector: 'app-rmi-form',
  templateUrl: './rmi-form-demo.component.html',
  styleUrls: ['./rmi-form-demo.component.css']
})
export class RmiFormDemoComponent implements AfterViewInit {

  @ViewChild(RmiFormComponent) form: RmiFormComponent;

  config: FieldConfig[] = [
    {type: 'input', label: 'Full Name', name: 'name', placeholder: 'Enter your name',
    validation: [Validators.required, Validators.minLength(4)]},
    {type: 'input', label: 'Favourite Food', name: 'food', placeholder: 'Enter your favourite foof',
     validation: [Validators.required]}
  ];

  constructor() { }


  ngAfterViewInit(): void {
    // let previousValid = this.form.valid;
    // this.form.changes.subscribe(() => {
    //   if (this.form.valid !== previousValid) {
    //     previousValid = this.form.valid;
    //     this.form.setDisabled('submit', !previousValid);
    //   }
    // });

    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Qin');
    // this.form.setValue('food', 'ananas');
  }

  onSubmit(value: {[name: string]: any}) {
    console.log(value);
  }
}
