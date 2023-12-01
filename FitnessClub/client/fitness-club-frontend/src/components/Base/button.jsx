import React from 'react';
import './base.scss';

export const Button = ({ text, onClick, type, disabled }) => {
    return (
        <button
            className="button"
            onClick={onClick}
            type={type}
            disabled={disabled}>
            {text}
        </button>
    );
};