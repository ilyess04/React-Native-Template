import {IAuthReducer} from '../interfaces';

const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};
export {INIT_AUTH_REDUCER_STATE};
