import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      };
    }

    handleClick = () => {
      if(this.state.selectedKeg != null){
        this.setState({
          formVisibleOnPage: false,
          selectedKeg: null,
          editing: false
        });
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }));
      }
    }

    handleEditClick = () => {
      this.setState({editing: true});
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
      this.setState({formVisibleOnPage: false});
    }

    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.props.masterKegList[id];
      this.setState({selectedKeg: selectedKeg});
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
      this.setState({
        editing: false,
        selectedKeg: null
      });
    }

    handleDeletingKeg = (id) => {
      const { dispatch } = this.props;
      const action = {
        type: 'DELETE_KEG',
        id: id
      }
      dispatch(action);
      this.setState({selectedKeg: null});
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

      if(this.state.editing){
        currentlyVisibleState = <EditKegForm 
                                keg = {this.state.selectedKeg} 
                                onEditKeg = {this.handleEditingKegInList} />
                                buttonText = "Return to Keg List";
      } else if (this.state.selectedKeg != null){
        currentlyVisibleState = <KegDetail 
                                keg = {this.state.selectedKeg} 
                                onClickingDelete = {this.handleDeletingKeg}
                                onClickingEdit = {this.handleEditClick} />
                                buttonText="Return to Keg List";
      } else if (this.state.formVisibleOnPage){
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
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;