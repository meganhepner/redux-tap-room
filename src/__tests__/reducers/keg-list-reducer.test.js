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
  })

});

// name: PropTypes.string,
// brand: PropTypes.string,
// price: PropTypes.number,
// alcoholContent: PropTypes.number,
// kegSize: PropTypes.number,
// id: PropTypes.string,