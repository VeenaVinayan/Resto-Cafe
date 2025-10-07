import axios from 'axios';

export const  fetchCafeData = async() =>{
    console.log("Api call here !!");
    const API = import.meta.VITE_APP_API;
    const result = await axios.get(API,{
        headers:{ 
          "Accept":'application/json'
        }
    });
    console.log("Result ::",result.data);
    if(result.status === 200){
        return result.data
    }else{
        return null;
    }
}