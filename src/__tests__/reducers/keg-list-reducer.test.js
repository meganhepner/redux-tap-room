import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const kegData = {
    name: 'Level Up Pils',
    brand: 'Level Beer',
    price: '5.00',
    alcoholContent: '5',
    id: 1
  }

  const currentState = {
    1: { 
    name: 'Level Up Pils',
    brand: 'Level Beer',
    price: '5.00',
    alcoholContent: '5',
    id: 1 
    },
    2: {
    name: 'Lite',
    brand: 'Budweiser',
    price: '3.00',
    alcoholContent: '3',
    id: 2 
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null})).toEqual({});
  });

  test ('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };
    expect (kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: { 
      name: 'Lite',
      brand: 'Budweiser',
      price: '3.00',
      alcoholContent: '3',
      id: 2 
      }
    });
  });

  test('Should successfully update a keg', () => {
    const { name, brand, price, alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    }

    const stateToUpdate = kegListReducer({}, action);

    const updateAction =  {
      type: 'ADD_KEG',
      name: 'German Pilz',
      brand: 'Zoiglhaus',
      price: '4.00',
      alcoholContent: '4',
      id: 1
    }
    expect(kegListReducer(stateToUpdate, updateAction)).toEqual({
      [id] : {
        name: 'German Pilz',
        brand: 'Zoiglhaus',
        price: '4.00',
        alcoholContent: '4',
        id: 1
      }
    });
  });
});


// name: PropTypes.string,
// brand: PropTypes.string,
// price: PropTypes.number,
// alcoholContent: PropTypes.number,
// kegSize: PropTypes.number,
// id: PropTypes.string,