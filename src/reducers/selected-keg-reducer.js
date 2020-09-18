export default (state = false, action) => {
  const { name, brand, price, alcoholContent, kegSize, id } = action;
  switch (action.type) {
    case 'SELECT_KEG':
      const newState = { ...state };
      select newState[id];
      return newState;
    default:
      return state;
  }
};