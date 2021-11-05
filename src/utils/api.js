import { Redirect } from "react-router-dom";
import { paths } from ".";
export default {
    ApiCall: ({ url, method='GET', data=null, cb})=>{
        const token = localStorage.getItem('userToken');
        if(!token){
            throw 'unauthorized user';
        }
        const api_path = paths.baseUrl+url;
        let api_content = {
            method,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        }
        if(data){
            api_content['body'] = JSON.stringify(data)
        }
        fetch(api_path, api_content)
            .then(response=>{
                return response.json()
            })
            .then((response) =>{
                return cb(response)
            })
            .catch((error) => console.error(error));

    },

    loginAPI: data=>{
        let api_content = {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            
        }
        if(data){
            api_content['body'] = JSON.stringify(data)
        }
        fetch(paths.baseUrl+'/login/', api_content)
            .then(response=>{
                return response.json()
            })
            .then((response) =>{
                if(response.access){
                    localStorage.setItem('userToken',response.access);
                    <Redirect to="/" />
                }
            })
            .catch((error) => console.error(error));

    }
}