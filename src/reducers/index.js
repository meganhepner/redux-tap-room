import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editKegReducer from './edit-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editing: editKegReducer
});

export default rootReducer;