import React, { useState } from 'react';
import { TextInput } from './TextInput';

export const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        passport: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <TextInput
                label="Passport Number"
                name="passport"
                value={formData.passport}
                onChange={handleChange}
                placeholder="Enter your passport number"
            />

            <button type="submit">Submit</button>
        </form>
    );
};
