import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeManagementFrontEnd';
  http=inject(HttpClient);
  employees$=this.getAllEmployee();

  private getAllEmployee():Observable<Employee[]>{

    return this.http.get<Employee[]>("https://localhost:7085/api/employee/getallemployee");
  }
}
