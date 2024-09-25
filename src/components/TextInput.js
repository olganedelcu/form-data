import React from 'react';

export const TextInput = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div>
            <label>{label}: </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
