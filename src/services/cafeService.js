import axios from 'axios';
export const  fetchCafeData = async() =>{
    console.log("Api call here !!");
    const API = import.meta.env.VITE_APP_API ?? "https://zartek-task.vercel.app/api/resto-cafe";
    console.log(API);
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