import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee: Employee = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    email: '',
    dateOfJoining: '',
    isOnboarded: false,
    departmentId: 0,
    departmentName: ''
  };

  departments: any[] = [];
  isEditMode: boolean = false;
  
  constructor(private empService: EmployeeService, private deptService: DepartmentService, private router: Router) {}

  ngOnInit() {
    this.deptService.getDepartments().subscribe((res) => {
      this.departments = res;
    });
  }

  onSubmit() {
    this.empService.create(this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
