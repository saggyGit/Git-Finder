import React, { useContext } from 'react';
import GetContext from '../../context/GitContext';
const RepoList = () => {

    const{ repo_array} = useContext(GetContext)
    console.log(repo_array);
    return (
        <>
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body" style={{backgroundColor:"#2A303C"}}>
                <h2 className='text-3xl my-4 font-bold card-title' style={{color:"white"}}>
                    Top Repositories
                </h2>
                {
                repo_array.map((repo)=>{

                    return(
                        <h1 style={{color:"white"}}>{repo.name}</h1>
                    )
                })
                 }
               
            </div>
        </div>
            
        </>
    );
};

export default RepoList;