import React from 'react'
import Contacts from '../contact/Contacts'
import ContactForm from '../contact/ContactFrom'
import ContactFilter from '../contact/ContactFilter'
const Home = () => {
    return (
        <div className='grid-2'>
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    )
}

export default Home