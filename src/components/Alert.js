import React from 'react';
import PropTypes from 'prop-types';
export default function Alert(props) {
    const cap = (word) =>{
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
    return (
    props.alert &&
    <>
    <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong> {cap(props.alert.type)}</strong> : {props.alert.msg}
    </div>
    </>
      )
}
