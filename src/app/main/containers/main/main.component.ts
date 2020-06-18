import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { MainState } from '../../../store/state/main.state';
import * as MainActions from '../../../store/actions/main.actions';
import { Observable } from 'rxjs';
import { companies, company } from '../../../store/state/main-state.selectors';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Company } from '../../models/company.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  companies$: Observable<Company[]>;
  company$: Observable<Company>;

  constructor(
    private store: Store<MainState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(MainActions.getAllCompanies());

    this.companies$ = this.store
      .pipe(
        companies,
        map((items: Company[]) => items.filter((c: Company) => c.monthBalance > 0)),
      );
  }

  changeCategory(category: string) {
    this.store.dispatch(MainActions.getCurrentCategory({ category }));
    this.company$ = this.store
      .pipe(
        company,
      );
  }
}
