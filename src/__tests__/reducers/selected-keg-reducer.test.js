import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {

  let action;

  const currentState = {
    1: { 
    name: 'Level Up Pils',
    brand: 'Level Beer',
    price: '5.00',
    alcoholContent: '5',
    kegSize: '124',
    id: 1 
    },
    2: {
    name: 'Lite',
    brand: 'Budweiser',
    price: '3.00',
    alcoholContent: '3',
    kegSize: '124',
    id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully select a keg', () => {
    action = {
      type: 'SELECT_KEG',
      id: 2
    };
    expect(selectedKegReducer(currentState, action)).toEqual({
      2: { 
      name: 'Lite',
      brand: 'Budweiser',
      price: '3.00',
      alcoholContent: '3',
      kegSize: '124',
      id: 2 
      }
    });
  });
});