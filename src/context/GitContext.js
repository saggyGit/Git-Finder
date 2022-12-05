import { createContext  , useState ,useReducer} from "react";
import axios from "axios";
import GitReducer from "./GitReducer";


const GetContext = createContext()

export const GitProvider=({children})=>{

    const InitialState={

        data:[],
        Loading:false,
        user:{},
        repo_array:[]
    }

    const [state , dispatch] = useReducer(GitReducer , InitialState)

    // const[ data, setData ] = useState([])
    // const[ Loading , setLoading ] = useState(true)

    const getUser=()=>{

     axios.get(process.env.REACT_APP_URL)
    .then(async(res)=>{
     const Data= await res.data
     
     dispatch({
        type:"GetUser",
        payload:Data
     })

     })
    .catch((err)=>{
     console.log(err);
    })
  }

  const searchUser=(text)=>{

    axios.get(`http://api.github.com/search/users?q=${text}`)
    .then(async(res)=>{

    const textData=await res.data.items
    dispatch({
        type:"searchUser",
        payload:textData


    })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  const clearUser=()=>{

    dispatch({
        type:"CLEAR_USERS"
    })
  }

  const getUrl=(url)=>{

     

    axios.get(url)
    .then((res)=>{

        console.log(res.data)
        dispatch({
            type:"SINGLE_USER",
            payload:res.data
        })
    })
    .catch((err)=>{
        console.log(err)
    })

    //axios fro getting the repo array
    
    axios.get(`${url}/repos`)
    .then((res)=>{

        dispatch({
            type:"GET_REPO_ARRAY",
            payload:res.data
        })

    
    })
  }

    return(

<GetContext.Provider value={

    {
        getUser,
        data:state.data,
        Loading:state.Loading,
        searchUser,
        clearUser,
        getUrl,
        user:state.user,
        repo_array:state.repo_array
       
    }
}>
    {children}
</GetContext.Provider>


    )
}
export default GetContext