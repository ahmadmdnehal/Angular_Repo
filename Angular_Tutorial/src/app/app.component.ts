import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DataBinding1Component } from "./data-binding1/data-binding1.component";

@Component({
  selector: 'app-root',
  imports: [ DataBinding1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Tutorial';
}
