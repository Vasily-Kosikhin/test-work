import { combineReducers } from 'redux';
import { vpsConfigReducer } from './vpsConfigReducer';

export const rootReducer = combineReducers({
  vps: vpsConfigReducer
});
