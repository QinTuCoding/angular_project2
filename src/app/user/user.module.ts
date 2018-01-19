import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserList1Component } from '../user-list1/user-list1.component';
import { UserList2Component } from '../user-list2/user-list2.component';
import { UserList3Component } from '../user-list3/user-list3.component';
import { UserComponent } from './user.component';
import { CustomDirective } from '../custom.directive';

const routes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: '1', component: UserList1Component },
            { path: '2', component: UserList2Component },
            { path: '3', component: UserList3Component }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        UserComponent,
        UserList1Component,
        UserList2Component,
        UserList3Component,
        CustomDirective
    ],
    exports: [
        RouterModule,
    ]
})
export class UserModule {
}
