import React, { useContext ,useState } from 'react';
import UserSearch from '../components/users/UserSearch';
import UsersList from '../components/users/UsersList';
import GetContext from '../context/GitContext';

const Home = () => {


    return (
        <>
        <UserSearch/>
        
        <UsersList/> 
        
      
        </>
    );
};

export default Home;