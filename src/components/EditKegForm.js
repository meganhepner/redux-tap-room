import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
    const { keg } = props;

    function handleEditKegFormSubmission(event) {
        event.preventDefault();
        props.onEditKeg({
            name: event.target.name.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            alcoholContent: event.target.alcoholContent.value,
            kegSize: event.target.kegSize.value,
            id: keg.id
        });
    }
    return(
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleEditKegFormSubmission}
                buttonText="Update Keg" 
                defaultName={keg.name}
                defaultBrand={keg.brand}
                defaultPrice={keg.price}
                defaultAlcoholContent={keg.alcoholContent}
                defaultKegSize={keg.kegSize}
            />
        </React.Fragment>
        
    );
}

EditKegForm.propTypes = {
    keg: PropTypes.object,
    onEditKeg: PropTypes.func
};

export default EditKegForm;