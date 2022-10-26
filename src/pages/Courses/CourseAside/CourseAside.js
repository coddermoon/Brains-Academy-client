import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Assets/Contexts/AuthProvider';
import './CourseAside.css'

const CourseAside = () => {
    const {user,logOut}= useContext(AuthContext)


    const handleLogout = ()=>{
        logOut()
        .then(()=>{
            toast.success("logout successfull")
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

    return (
        <>
           <div className="profile ">
            <div className="rounded-img my-3">
                <img src={user?.photoURL ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} alt="user" />
            </div>
            <div className="info text-start">
            <p className='text-center'>ID:{user?.uid ? user.uid : 'null'}</p>
            <p>Name :{user?.displayName ? user.displayName : 'null'}</p>
            <p>E-Mail :{user?.email ? user.email : 'null'}</p>
            
            </div>
            <button onClick={handleLogout} className='mainBtn'>Logout</button>
           </div>
        </>
    );
};

export default CourseAside;


