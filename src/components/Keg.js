import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick={ () => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <p>Price per pint: ${props.price}</p>
        <p>ABV: {props.alcoholContent}%</p>
        <p>Remaining Pints: {props.kegSize}</p>
      </div>
      <button onClick={ () => props.whenKegDecrementClicked(props.id) }>Sell Pint</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  kegSize: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  whenKegDecrementClicked: PropTypes.func
}

export default Keg;