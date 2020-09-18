import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editKegReducer from './edit-keg-reducer';
import selectedKegReducer from './selected-keg-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  selectedKeg: selectedKegReducer,
  editing: editKegReducer,

});

export default rootReducer;