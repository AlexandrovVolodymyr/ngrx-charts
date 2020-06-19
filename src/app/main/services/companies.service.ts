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
      name: 'Microsoft',
      type: 'IT Company',
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
      name: 'Oracle',
      type: 'IT Company',
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
      name: 'East India',
      type: 'Royal Chartered Company',
      weekStats: {
        monday: 12,
        tuesday: 24,
        wednesday: 33,
        thursday: 17,
        friday: 2,
        saturday: 48,
        sunday: 16
      },
      balance: 1500,
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
    {
      id: 5,
      name: 'BBC',
      type: 'Royal Chartered Company',
      weekStats: {
        monday: 3,
        tuesday: 12,
        wednesday: 41,
        thursday: 33,
        friday: 55,
        saturday: 25,
        sunday: 20
      },
      balance: 750,
      monthBalance: 200
    },
    {
      id: 6,
      name: 'The Reserve Bank of India',
      type: 'Statutory Company',
      weekStats: {
        monday: 22,
        tuesday: 31,
        wednesday: 14,
        thursday: 17,
        friday: 22,
        saturday: 40,
        sunday: 20
      },
      balance: 1200,
      monthBalance: 450
    },
    {
      id: 7,
      name: 'Life Insurance Corporation',
      type: 'Statutory Company',
      weekStats: {
        monday: 22,
        tuesday: 31,
        wednesday: 14,
        thursday: 17,
        friday: 22,
        saturday: 40,
        sunday: 20
      },
      balance: 1200,
      monthBalance: 450
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
