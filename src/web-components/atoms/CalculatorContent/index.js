import React from "react";
import PropTypes from 'prop-types'
import './style.scss';

function CalculatorContent(props){
    const classModifier = props.classModifier;

    return(
        <div className={`calculator-content ${classModifier && 'calculator-content--' + classModifier}`}>
            <span>{props.text}</span>
        </div>
    );
}

CalculatorContent.propTypes = {
    /** Used to swith the view to header */
    classModifier: PropTypes.string,

    /** Used to show an operation */
    text: PropTypes.string
}

export default CalculatorContent;