import axios from 'axios';
import React ,{useContext, useEffect, useState}from 'react';
import { NavLink, useParams } from 'react-router-dom';
import GetContext from '../../context/GitContext';
import {FaUsers , FaStore ,FaCodepen , FaUserFriends} from 'react-icons/fa'
import Spinner from './Spinner';
import RepoList from '../repos/RepoList';
const User = () => {

    const  param = useParams()
    const{data , getUrl , user} = useContext(GetContext)
    const[ object ,setObject ] = useState({})
   
    useEffect(()=>{

        data.filter((user)=>{

            if(+param.id === user.id )
            {
                setObject(user)
                getUrl(user.url)           
                     return user

            }
        })
     },[param.id])

     const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        type,
        twitter_username
    } = user

    return (
        <>
        {Object.keys(object)== 0 ? <Spinner/>:
        <>
        <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
                <NavLink to='/' className='btn btn-ghost'>Back to Search</NavLink>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="custom-card-image mb-6 md:mb-0">
                    <div className="rounded-lg shadow-xl card image-full">
                        <figure>
                        <img src={avatar_url} alt="" />
                        </figure>
                        <div className="card-body justify-end" >
                            <h2 className="card-title mb-0">
                                {name}
                            </h2>
                            <p>{login}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title" style={{color : "white"}}>
                            {name}
                            <div className="ml-2 mr-1 badge badge-success">
                                {type}
                            </div>
                            {hireable && (
                                <div className='mx-1 badge badge-info '>hireable</div>
                            )}

                        </h1>
                        <p>{bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline' style={{color:"white"}}>Visit Github Profile</a>
                        </div>
                    </div>
                    <div className="w-full rounded-lg shadow-md bg-base-100 stats color" style={{backgroundColor:"#2A303C" ,    color: "white"}}>
                        {
                            location && (
                                <div className="stat">
                                    <div className="stat-title text-md" >
                                        Location
                                    </div>
                                    <div className="text-lg stat-value">
                                        {location}
                                    </div>
                        
                                </div>
                            )
                        }
                          {
                            blog && (
                                <div className="stat">
                                    <div className="stat-title text-md">
                                        Website
                                    </div>
                                    <div className="text-lg stat-value">
                                        <a href={`http://${blog}`} target="_blank" rel='noreferrer'>Visit Blog</a>
                                    </div>
                        
                                </div>
                            )
                        }
                         {
                            twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">
                                       twitter
                                    </div>
                                    <div className="text-lg stat-value">
                                        <a href={`http://twitter.com/${twitter_username}`} target="_blank" rel='noreferrer'> {twitter_username}</a>
                                    </div>
                        
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="w-full py-2 mb-6 rounded-lg shadow-md bg-base-100 stats color"  style={{ background: "tan"}}>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='text-3xl.md:text-5xl' style={{color:"purple"}}></FaUsers>
                    </div>
                    <div className="stat-title pr-5">
                        followers
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {followers}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUserFriends className='text-3xl.md:text-5xl' style={{color:"purple"}}></FaUserFriends>
                    </div>
                    <div className="stat-title pr-5">
                        following
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {following}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaCodepen className='text-3xl.md:text-5xl' style={{color:"red"}}></FaCodepen>
                    </div>
                    <div className="stat-title pr-5">
                    public_repos
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {public_repos}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStore className='text-3xl.md:text-5xl' style={{color:"green"}}></FaStore>
                    </div>
                    <div className="stat-title pr-5">
                    public_gists
                    </div>
                    <div className="stat-value pr-5 text-3xl md:text-4xl">
                        {public_gists}
                    </div>
                </div>
            </div>
            <RepoList/>
        </div>
        
        </>
        }
        
        </>
    );
};

export default User;
