import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          defaultValue={props.defaultName}
          placeholder='Name of Beer' />
        <input
          type='text'
          name='brand'
          defaultValue={props.defaultBrand}
          placeholder='Brand Name' />
        <input
          type='number'
          name='price'
          defaultValue={props.defaultPrice}
          placeholder='Price per Pint' />
        <input
          type='number'
          name='alcoholContent'
          defaultValue={props.defaultAlcoholContent}
          placeholder='ABV' />
        <input
          type='number'
          name='kegSize'
          defaultValue={props.defaultkegSize}
          placeholder='Pints in Keg' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultName: PropTypes.string,
  defaultBrand: PropTypes.string,
  defaultPrice: PropTypes.number,
  defaultAlcoholContent: PropTypes.number,
  defaultkegSize: PropTypes.number
};

export default ReusableForm;