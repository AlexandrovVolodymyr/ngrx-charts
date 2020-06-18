import { createFeatureSelector, createSelector, select } from '@ngrx/store';

import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MainState } from './main.state';
import { feature } from '../actions/main.actions';

export const selectMainState = createFeatureSelector<MainState>(feature);

export const selectCompanies = createSelector(
  selectMainState,
  (state: MainState) => state.companies
);

export const selectCurrentCompany = createSelector(
  selectMainState,
  (state: MainState) => state.company
);

export const companies = pipe(
  select(selectCompanies),
  filter(v => !!v)
);

export const company = pipe(
  select(selectCurrentCompany),
  filter(v => !!v)
);
