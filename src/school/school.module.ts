import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import {MatTableModule} from "@angular/material/table";
import { CreateSchoolComponent } from './create-school/create-school.component';



@NgModule({
  declarations: [
    SchoolDashboardComponent,
    CreateSchoolComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SchoolModule { }
