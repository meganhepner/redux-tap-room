  
import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  
  return(
    <React.Fragment>
      <h2>Keg Details</h2>
      <h3>{keg.brand} - {keg.name}</h3>
      <p>Price per pint: ${keg.price}</p>
      <p>ABV: {keg.alcoholContent}%</p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ () => onClickingDelete(keg.id) }>Delete Keg</button>

      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default KegDetail;