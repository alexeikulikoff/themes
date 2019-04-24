import React from "react";
import PropTypes from "prop-types";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import '../css/alceona.css';

library.add(faStroopwafel,faAddressCard)

const Button =({caption, type, icon,  onClick=f=>f }) =>{
    return (
            <button  className = { "btn btn-" + type }  onClick={ onClick }>
                { !icon || 0 === icon.length ?  ( '' ) : ( <FontAwesomeIcon icon={icon} /> ) }<span className="span-padding">{ caption }</span>
            </button>
)}
Button.propTypes = {
    caption :PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
};

export default Button ;