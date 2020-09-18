import editKegReducer from '../../reducers/edit-keg-reducer';

describe("editKegReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(editKegReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle edit state to true', () => {
    expect(editKegReducer(false, { type: 'TOGGLE_EDIT' })).toEqual(true);
  });

});