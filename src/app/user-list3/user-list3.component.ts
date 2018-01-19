import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list3',
  templateUrl: './user-list3.component.html',
  styleUrls: ['./user-list3.component.css']
})
export class UserList3Component implements OnInit {

  users = [
    { id: '11', name: 'John Doe----' },
    { id: '22', name: 'Jane Roe--' },
    { id: '33', name: 'John Smith------' }
  ];
  constructor() { }

  ngOnInit() {
  }


}
