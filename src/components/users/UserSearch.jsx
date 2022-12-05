import { handler } from 'daisyui';
import React, { useContext, useState } from 'react';
import GetContext from '../../context/GitContext';

const UserSearch = ({clearHandler,setClear}) => {
    const { data , searchUser , clearUser } =useContext(GetContext)

    const[ text , setText ] = useState('')
    const[ msg , setmsg ] = useState(false)


    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault()

        if(text=='')
        {
            setmsg(true)
        }
        else
        {
          searchUser(text)
          setText('')            
        }
    }
       return (
        <>
        <div className='grid grid-cols-1 xl-grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 '>
        <div>
           <form onSubmit={submitHandler} >
            {msg && <div style={{ color:"red", fontSize:"30px"}}>please enter user name</div>}
            <div className="form-control">
                <div className="relative">
                    <input type="text" className="w-full pr-40 bg-green-200 input  text-black"  placeholder='Search'
                     value={text}
                     onChange={handleChange}/>
                    <button type='submit' className="absolute top-0 right-0 rounded-1-none w-20 btn ">Go</button>
                </div>
            </div>
           </form>
        </div>
        <div>
            {
                data.length>0 &&
            <button className='btn btn-lg' style={{backgroundColor:"red"}} onClick={()=>clearUser()}>Clear</button>
}
        </div>
            
        </div>
        </>
    );
};

export default UserSearch;