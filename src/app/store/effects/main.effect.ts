import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CompaniesService } from '../../main/services/companies.service';
import * as MainActions from '../actions/main.actions';
import { Company } from '../../main/models/company.interface';
import { Action } from '@ngrx/store';

@Injectable()
export class MainEffect {

  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService
  ) { }

  getAllCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainActions.getAllCompanies),
      mergeMap(() => this.companiesService.getAllCompanies()),
      map((companies: Company[]) => MainActions.getAllCompaniesSuccess( { companies })),
      catchError(error => of(MainActions.getAllCompaniesFail({ error })))
    )
  );

  getCurrentCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainActions.getCurrentCategory),
      mergeMap((payload: { category: string, type: string }) => this.companiesService.getCurrentCompany(payload)),
      map((payload: any) => MainActions.getCurrentCategorySuccess(payload)),
      catchError(error => of(MainActions.getCurrentCategoryFail({ error })))
    )
  );
}
