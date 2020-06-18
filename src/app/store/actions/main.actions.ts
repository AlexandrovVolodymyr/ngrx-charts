import { createAction, props } from '@ngrx/store';

export const feature = 'Company';

export const getAllCompanies = createAction(`[${feature}] Get All Companies`);
export const getAllCompaniesSuccess = createAction(`[${feature}] Get All Companies Success`, props<{ companies }>());
export const getAllCompaniesFail = createAction(`[${feature}] Get All Companies Error`, props<{ error }>());

export const getCurrentCategory = createAction(`[${feature}] Get Current Category`, props<{ category }>());
export const getCurrentCategorySuccess = createAction(`[${feature}] Get Current Category Success`, props<{ category }>());
export const getCurrentCategoryFail = createAction(`[${feature}] Get Current Category Error`, props<{ error }>());
