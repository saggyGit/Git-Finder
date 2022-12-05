import React from 'react'
import image from '../../assets/loading-loading-forever.gif'

const Spinner = () => {
    return (
        <>
        <img src={image} alt="Loading..." width={"80px"} style={{margin:"150px auto"  }} />
            
        </>
    );
};

export default Spinner;