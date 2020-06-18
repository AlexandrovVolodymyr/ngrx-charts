import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { initialState, MainState } from '../state/main.state';
import * as MainActions from '../actions/main.actions';

// MainState ?? type
export const mainAdapter: EntityAdapter<MainState> = createEntityAdapter<MainState>();

const mainInitialState = mainAdapter.getInitialState(initialState);

const mainReducer = createReducer(
  mainInitialState,
  on(MainActions.getAllCompanies, (state: MainState) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(MainActions.getAllCompaniesSuccess, (state: MainState, { companies }) => {
    return {
      ...state,
      companies,
      loading: false
    };
  }),
  on(MainActions.getAllCompaniesFail, (state: MainState, { error }) => {
    console.error(error);
    return {
      ...state,
      error,
      loading: false
    };
  }),
  on(MainActions.getCurrentCategory, (state: MainState, { category } ) => {
    return {
      ...state,
      company: state.companies.find(c => c.type === category),
      loading: true
    };
  }),
  on(MainActions.getCurrentCategorySuccess, (state: MainState, { category }) => {
    return {
      ...state,
      category,
      loading: false
    };
  }),
  on(MainActions.getCurrentCategoryFail, (state: MainState, { error }) => {
    console.error(error);
    return {
      ...state,
      error,
      loading: false
    };
  })
);

export function reducer(state: MainState | undefined, action: Action) {
  return mainReducer(state, action);
}
