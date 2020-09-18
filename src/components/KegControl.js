import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }
  


  handleEditClick = () => {
    // this.setState({editing: true});
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_EDIT'
    }
    dispatch(action);
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, kegSize, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      kegSize: kegSize
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = {
      type: 'SELECT_KEG',
      id: this.id
    }
    dispatch(action);
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, kegSize, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      kegSize: kegSize
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_EDIT'
    }
    dispatch(action2);
    const action3 = {
      type: 'SELECT_KEG',
    }
    dispatch(action3);
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    const action3 = {
      type: 'SELECT_KEG',
    }
    dispatch(action3);
  }

  handleDecrementKegSize = (kegToDecrementId) => {
    const selectedKeg = this.props.masterKegList[kegToDecrementId];
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, kegSize, id } = selectedKeg;
    const decrement = kegSize -1;
    if (kegSize > 0) {
      const action = {
        type: 'ADD_KEG',
        id: id,
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        kegSize: decrement
      }
    dispatch(action);
    }
  };

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.props.editing){
      currentlyVisibleState = <EditKegForm 
                              keg = {this.props.selectedKeg} 
                              onEditKeg = {this.handleEditingKegInList} />
                              buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null){
      currentlyVisibleState = <KegDetail 
                              keg = {this.props.selectedKeg} 
                              onClickingDelete = {this.handleDeletingKeg}
                              onClickingEdit = {this.handleEditClick} />
                              buttonText="Return to Keg List";
    } else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm 
                              onNewKegCreation={this.handleAddingNewKegToList} />;
                              buttonText="Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
                              kegList={this.props.masterKegList} 
                              onKegSelection={this.handleChangingSelectedKeg}
                              onChangeKegSizeSelection={this.handleDecrementKegSize} />
                              buttonText="Add Keg";
    }
      
      
    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick={ this.handleClick }>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing,
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;