export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_FORM':
    return !state;
  default: 
    return state;
  }
};

//step 1 : added 'formVisibleOnPage: state.formVisibleOnPage' to mapStateToProps
//step 2 : removed  'formVisibleOnPage: false,' from constructor
//step 3 : removed all instances of 'this.setState({formVisibleOnPage: false});' from functions
//step 4 : changed instances of this.state.formVisibleOnPag to 'else if (this.props.formVisibleOnPage)' in return statement
//step 5 : add formVisibleOnPage to propTypes