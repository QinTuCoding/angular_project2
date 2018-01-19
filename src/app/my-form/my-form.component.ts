import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
    langs: string[] = [
        'English',
        'French',
        'German',
    ];

    form_content = [
      {

      }
    ];
    myform: FormGroup;
    constructor() { }

    ngOnInit() {
        this.myform = new FormGroup({
            name: new FormGroup({
                firstname: new FormControl(),
                lastname: new FormControl(),
            }),
            email: new FormControl(),
            password: new FormControl(),
            language: new FormControl()
        });
    }

    onClick() {
        const newValue = {name: {firstname: 'qin', lastname: 'tu'},
         email: 'test@freschesolutions.com', password: 'rmidev', language: 'english'};
        this.myform.setValue(newValue);
    }

}
