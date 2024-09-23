import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,AsyncPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementFrontEnd';
  http=inject(HttpClient);
  
  contactsForm = new FormGroup({ 

    name: new FormControl<string>(''),
    email: new FormControl<string | null>(null), 
    phone: new FormControl<string | null>(null),
  })

  onFormSubmit() {
    

  const addContactRequest={
    name: this.contactsForm.value.name,
    email: this.contactsForm.value.email,
    phone: this.contactsForm.value.phone,
  }
  console.log(addContactRequest);

  this.http.post('https://localhost:7085/api/employee/addnewemployee', addContactRequest)
    .subscribe({
        next: (value) => {
          console.log(value);
          this.employees$=this.getAllEmployee();
          this.contactsForm.reset();
        }
    });
    console.log(this.contactsForm.value);
  }

  employees$=this.getAllEmployee();

  private getAllEmployee():Observable<Employee[]>{

    return this.http.get<Employee[]>("https://localhost:7085/api/employee/getallemployee");
  }
  private addEmployee():Observable<Employee[]>{

    return this.http.get<Employee[]>("https://localhost:7085/api/employee/addnewemployee");
  }
}
