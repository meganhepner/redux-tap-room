import editKegReducer from '../../reducers/edit-keg-reducer';

describe("editKegReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(editKegReducer(false, { type: null })).toEqual(false);
  });
  
})