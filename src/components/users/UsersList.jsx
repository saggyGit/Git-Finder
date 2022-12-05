import axios from 'axios';
import React, { useContext, useEffect ,useState} from 'react';
import { Await } from 'react-router-dom';
import Spinner from './Spinner';
import UserItem from './UserItem';
import GitContext from '../../context/GitContext'


const UsersList = () => {


    const {getUser, data , Loading} = useContext(GitContext)
    // useEffect(()=>{
    //        getUser()   
    // },[])

   
    return (
        <>

        {Loading ? <Spinner/>:
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 item">
                
            {data.map((item)=>{
            return(
                <>
            <UserItem key={item.id} user={item}/>
            </>
             )
           })}
  </div>}
       
        
      
        
           
        </>
    );
};

export default UsersList;