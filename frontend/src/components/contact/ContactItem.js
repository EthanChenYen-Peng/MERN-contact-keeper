import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { deleteContact, setCurrent, clearCurrent } from '../../redux/contact/contactAction'
const ContactItem = ({ contact }) => {

    const { _id, name, email, phone, type } = contact;
    const dispatch = useDispatch()
    const onDelete = () => {
        dispatch(deleteContact(_id))
        dispatch(clearCurrent())
    }
    const onEdit = () => {
        dispatch(setCurrent(contact))
    }
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span
                    style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (type === 'professional' ? 'badge-success' : 'badge-primary')
                    }
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (
                    <li>
                        <i className='fas fa-envelope-open' /> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone' /> {phone}
                    </li>
                )}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm'
                    onClick={onEdit}>
                    Edit
                </button>
                <button className='btn btn-danger btn-sm'
                    onClick={onDelete} >
                    Delete
                </button>
            </p>
        </div >
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};

export default ContactItem;