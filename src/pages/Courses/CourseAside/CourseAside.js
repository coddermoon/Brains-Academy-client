import React from 'react';
import './CourseAside.css'

const CourseAside = () => {
    return (
        <>
           <div className="profile ">
            <div className="rounded-img my-3">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" />
            </div>
            <div className="info text-start">
            <p className='text-center'>ID:askjnbdabdsalas</p>
            <p>Name :Mahamodul Hasan Moon</p>
            <p>E-Mail :coddermoon@gmail.com</p>
            
            </div>
            <button className='mainBtn'>Logout</button>
           </div>
        </>
    );
};

export default CourseAside;