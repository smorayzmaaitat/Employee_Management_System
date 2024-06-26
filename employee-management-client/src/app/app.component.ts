import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, EmployeeFormComponent],
  template: `
    <h1>Employee Management System</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent { }