const GitReducer=(state,action)=>{

   switch (action.type) {
    case "GetUser":
    return(
        {
        ...state,
        data:action.payload,
        Loading:false
        }
    )
    case "searchUser":
        return(
            {
                ...state,
                data:action.payload,
                Loading:false
            }
        )

        case "CLEAR_USERS":
        return(
            {
                ...state,
                data:[],
               
            }
        )
        case "SINGLE_USER":
        return(
            {
                ...state,
                user:action.payload,
               
            }
        )
        case "GET_REPO_ARRAY":
            return(
                {
                    ...state,
                    repo_array:action.payload
                   
                }
            )
   default:
   return state  
}
}

export default GitReducer