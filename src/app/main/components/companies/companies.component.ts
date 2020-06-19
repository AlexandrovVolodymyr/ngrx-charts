import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Company } from '../../models/company.interface';

import { Chart } from 'chart.js';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesComponent implements OnInit {

  monthBalance = 0;
  balance = 0;
  weekStats = [];
  type = 'All Categories';
  name = 'All Names';
  chart: Chart;
  aggregateArrays = [];
  isEntry = false;
  entryName = [];

  @Input() companies: Company[];
  @Input() set company(value) {
    if (value) {
      this.balance = 0;
      this.monthBalance = 0;
      this.weekStats = [];
      this.aggregateStats(this.aggregateArrays);
      value = { ...value.weekStats, ...this.weekStats };
      this.chart.destroy();
      this.initChart([value]);
    } else {
      this.monthBalance = 0;
      this.balance = 0;
      this.weekStats = [];
      if (this.chart) this.chart.destroy();
      this.aggregateStats(this.companies);
      this.initChart(this.companies);
    }
  }
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  selectCategory(value: string) {
    this.aggregateArrays = this.companies.filter(c => c.type === value);

    this.selectedValue.emit(value);
  }

  selectName(name: string) {
    if (name !== 'All Names') {
      this.selectedName.emit(name);
      this.isEntry = true;
      this.entryName = [this.companies.find(item => item.name === name)];
    } else {
      this.isEntry = false;
      this.entryName = [];
    }
  }

  showEntryName() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.entryName
    });
  }

  private aggregateStats(companies: Company[]) {
    companies.forEach(item => {
      this.balance += item.balance;
      this.monthBalance += item.monthBalance;
      this.weekStats = [...this.weekStats, Object.values(item.weekStats)];
    });
    this.weekStats = this.weekStats.reduce((acc, array) => array.map((item, index) => (acc[index] || 0) + item), []);
  }
  private initChart(companies) {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'Th', 'F', 'Sat', 'S'],
        datasets: [{
          label: 'Companies List',
          backgroundColor: 'rgb(199,201,222)',
          borderColor: 'rgb(50,53,226)',
          data: this.weekStats,
        }]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }
}
