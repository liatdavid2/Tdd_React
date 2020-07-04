import Axios from "axios";

export const signup = (user) =>{
    return Axios.post('http://localhost:7000/rest/1.0/users/add',user)
}