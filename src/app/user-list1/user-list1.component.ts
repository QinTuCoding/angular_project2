import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list1',
  templateUrl: './user-list1.component.html',
  styleUrls: ['./user-list1.component.css']
})
export class UserList1Component implements OnInit {

  users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Roe' },
    { id: '3', name: 'John Smith' }
  ];
  constructor() { }

  ngOnInit() {
  }


}
