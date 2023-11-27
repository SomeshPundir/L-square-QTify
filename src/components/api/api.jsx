import axios from 'axios';
export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums=async()=>{
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/albums/top`)
        // console.log(response);
        return response.data;

    }
    catch(e){
        console.error(e);
    }
}
export const fetchNewAlbums=async()=>{
    try{
const response= await axios.get(`${BACKEND_ENDPOINT}/albums/new`)
// console.log(response);

return response;   
}catch(e){
        console.error(e)
    }
}