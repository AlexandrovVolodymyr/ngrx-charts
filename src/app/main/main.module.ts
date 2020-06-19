import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StateModule } from '../store/state.module';

import { MainComponent } from './containers/main/main.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { FormsModule } from '@angular/forms';
import { FilterUniquePipe } from './pipes/filter-unique.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [MainComponent, CompaniesComponent, FilterUniquePipe, DialogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    StateModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ]
})
export class MainModule { }
