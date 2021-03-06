import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, SET_CURRENT, CLEAR_CURRENT, FILTER_CONTACTS, CLEAR_FILTER } from './contactType'


const initialState = {
    contacts: [
        {
            _id: 2,
            name: "Ethan",
            email: "adf@gmail.com",
            phone: "asdfa",
            type: 'personal'
        },
        {
            _id: 4,
            name: "Ethan",
            email: "adfdff@gmail.com",
            phone: "asdfa",
            type: 'personal'
        }
    ],
    current: null,
    filtered: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload)
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => (
                    contact._id === action.payload._id ? action.payload : contact
                ))
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state
    }
}

export default reducer