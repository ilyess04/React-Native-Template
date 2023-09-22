import {store} from '../../redux';
import {IUserModel} from '../models';

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  user?: IUserModel;
}
export type {IAuthReducer};
export type IRootState = ReturnType<typeof store.getState>;
