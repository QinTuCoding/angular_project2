import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list2',
  templateUrl: './user-list2.component.html',
  styleUrls: ['./user-list2.component.css']
})
export class UserList2Component implements OnInit {

  users = [
    { id: 'x', name: 'Mina' },
    { id: 'y', name: 'Jason' },
    { id: 'z', name: 'Ajeet' }
  ];
  constructor() { }

  ngOnInit() {
  }


}
