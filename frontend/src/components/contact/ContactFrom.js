import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addContact, updateContact, clearCurrent } from '../../redux/contact/contactAction'
import { v4 as uuidv4 } from 'uuid';
const ContactForm = () => {

    const dispatch = useDispatch()
    const current = useSelector(state => state.contact.current)
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });
    useEffect(() => {
        if (current !== null) {
            setContact(current)
        }
        else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [current])

    const { name, email, phone, type } = contact;

    const onChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (current !== null) {
            dispatch(updateContact(contact))
            dispatch(clearCurrent())
        } else {
            dispatch(addContact({ name, email, phone, type, _id: uuidv4() }))
        }

        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    };
    return (
        <form onSubmit={onSubmit}>

            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input
                type='radio'
                name='type'
                value='personal'
                checked={type === 'personal'}
                onChange={onChange}
            />
      Personal
            <input
                type='radio'
                name='type'
                value='professional'
                checked={type === 'professional'}
                onChange={onChange}
            />
      Professional
            <div>
                <input
                    type='submit'
                    value={current ? 'Update Contact' : 'Add Contact'}
                    className='btn btn-primary btn-block'
                />
            </div>
        </form>
    );
};

export default ContactForm;
