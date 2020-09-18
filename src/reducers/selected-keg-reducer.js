export default (state = null, action) => {
  const { name, brand, price, alcoholContent, kegSize, id } = action;
  switch (action.type) {
    case 'SELECT_KEG':
      const newState = { ...state };
      const selectedKeg = newState[id];
      return selectedKeg;
    default:
      return state;
  }
};