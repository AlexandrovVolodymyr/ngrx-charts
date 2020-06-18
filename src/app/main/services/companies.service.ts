import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../models/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  companies: Company[] = [
    {
      id: 1,
      name: 'some name',
      type: 'someType',
      weekStats: {
        monday: 30,
        tuesday: 35,
        wednesday: 50,
        thursday: 15,
        friday: 45,
        saturday: 50,
        sunday: 5
      },
      balance: 1500,
      monthBalance: 345
    },
    {
      id: 2,
      name: 'some name 2',
      type: 'someType',
      weekStats: {
        monday: 8,
        tuesday: 4,
        wednesday: 32,
        thursday: 12,
        friday: 4,
        saturday: 22,
        sunday: 15
      },
      balance: 800,
      monthBalance: 322
    },
    {
      id: 3,
      name: 'some name 3',
      type: 'someType 3',
      weekStats: {
        monday: 12,
        tuesday: 24,
        wednesday: 33,
        thursday: 17,
        friday: 2,
        saturday: 48,
        sunday: 16
      },
      balance: 150,
      monthBalance: 222
    },
    {
      id: 4,
      name: 'some name 4',
      type: 'someType 4',
      weekStats: {
        monday: 2,
        tuesday: 4,
        wednesday: 3,
        thursday: 17,
        friday: 2,
        saturday: 8,
        sunday: 6
      },
      balance: 0,
      monthBalance: 0
    },
  ];

  constructor() { }

  getAllCompanies(): Observable<Company[]> {
    return of(this.companies);
  }

  getCurrentCompany({ category }): Observable<Company> {
    const company = this.companies.find(c => c.type === category);
    return of(company);
  }
}
