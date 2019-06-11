
//funcion usada para acceder a la BD y obtener los prodes
export  async function getProdes(){
    
    try{
        const axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 


        let axiosConfig={
            headers:{
                'Accept': 'application/json',
               // 'Authorization': 'Bearer'+token.content
            }
        }

        let response =  await axios.get('/api/prodes', axiosConfig)
       
        return response.data;
    
    }
    catch(e){
        console.log(`Error getting prodes: ${e}`);
    }

}