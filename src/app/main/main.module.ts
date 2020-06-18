import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { StateModule } from '../store/state.module';

import { MainComponent } from './containers/main/main.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { FormsModule } from '@angular/forms';
import { FilterUniquePipe } from './pipes/filter-unique.pipe';

@NgModule({
  declarations: [MainComponent, CompaniesComponent, FilterUniquePipe],
  imports: [
    CommonModule,
    MainRoutingModule,
    StateModule,
    FormsModule
  ]
})
export class MainModule { }
