import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    test: string;
  constructor() { }

  ngOnInit() {
      this.test = 'sss';
  }

  handleF1() {
      alert('xxx');
  }

}
