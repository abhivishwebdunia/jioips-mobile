import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { loader } from './loader.reducer';
import { addEditDept,editDeptData } from './dept.reducer';

const rootReducer = combineReducers({
  authentication,
  addEditDept,editDeptData,
  registration,
  users,
  loader,
  alert
});

export default rootReducer;