import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  formContents: RMIFormControl[][];
  myform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formContents = [
      [
        {
          divStyle: 'col-xs-5', label: 'customer1', inputStyle: 'input_text',
          inputName: 'c1', type: 'text', formControlName: 'custName1'
        },
        {
          divStyle: 'col-xs-2', label: 'customer2', inputStyle: 'input_text',
          inputName: 'c2', type: 'text', formControlName: 'custName2'
        },
        {
          divStyle: 'col-xs-2', label: 'customer3', inputStyle: 'input_text',
          inputName: 'c3', type: 'text', formControlName: 'custName3'
        },
        {
          divStyle: 'col-xs-2', label: 'customer4', inputStyle: 'input_text',
          inputName: 'c4', type: 'text', formControlName: 'custName4'
        },
        {
          divStyle: 'col-xs-4', label: 'customer5', inputStyle: 'input_text',
          inputName: 'c5', type: 'text', formControlName: 'custName5'
        }
      ],
      [
        {
          divStyle: 'col-xs-4', label: 'address1', inputStyle: 'input_text',
          inputName: 'c6', type: 'text', formControlName: 'address1'
        },
        {
          divStyle: 'col-xs-4', label: 'address2', inputStyle: 'input_text',
          inputName: 'c7', type: 'text',  formControlName: 'address2'
        },
        {
          divStyle: 'col-xs-4', label: 'address3', inputStyle: 'input_text',
          inputName: 'c8', type: 'text', formControlName: 'address3'
        },
      ]

    ];

    this.myform = new FormGroup({
      custName1: new FormControl(),
      custName2: new FormControl(),
      custName3: new FormControl(),
      custName4: new FormControl(),
      custName5: new FormControl(),
      custName6: new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      address3: new FormControl(),

  });
  }




}

interface RMIFormControl {
  divStyle: string;
  label: string;
  labelStyle?: string;
  labelId?: string;
  inputId?: string;
  inputStyle: string;
  inputName: string;
  type: string;
  formControlName: string;
}
