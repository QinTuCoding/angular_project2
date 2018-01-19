import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { RmiFormDemoComponent } from './rmi-form/rmi-form-demo.component';
import { RmiFormComponent } from './rmi-form/containers/rmi-form.component';
import { RmiInputComponent } from './rmi-form/components/rmi-input/rmi-input.component';
import { RmiFieldDirective } from './rmi-form/directives/rmi-field.directive';
import { RmiShowErrorsComponent } from './rmi-form/error/rmi-show-errors.component';

const routes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'mf', component: MyFormComponent },
  { path: 'fo', component: CustomFormComponent },
  { path: 'rmi', component: RmiFormDemoComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    CustomFormComponent,
    RmiShowErrorsComponent,
    RmiFieldDirective,
    RmiInputComponent,
    RmiFormComponent,
    RmiFormDemoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RmiInputComponent]
})
export class AppModule { }
