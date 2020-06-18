import { EntityState } from '@ngrx/entity';
import { Company } from '../../main/models/company.interface';

export interface MainState extends EntityState<any>{
  companies: Company[];
  company: Company;
  loading: boolean;
  error: string;
}

export const initialState: MainState = {
  ids: [],
  entities: {},
  companies: null,
  company: null,
  loading: false,
  error: null
};
