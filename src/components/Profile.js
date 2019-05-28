import React from 'react';
import User from './User'
import Palette from './Palette'

const Profile = () => {
    return (
        <div className='container profile'>
            <User
                src="https://compromata.net/sites/default/files/styles/persons_544_288/public/image_4.jpg?itok=VDgTc8vz"
                alt="Man"
                name="some cool name"
            />
            <Palette/>
        </div>
    )
};

export default Profile


