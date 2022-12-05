import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


const UserItem = ({user}) => {


   
    return (
        <>

        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={user.avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
            <div>
                <h2 className='card-title' style={{color:"black"}}>{user.login}</h2>
                <NavLink className='text-base-content text-opacity-40' style={{ color:"black"}} to={`/users/${user.id}`}>visit Profile</NavLink>
            </div>
            </div>
        </div>

            
        </>
    );
};

export default UserItem;