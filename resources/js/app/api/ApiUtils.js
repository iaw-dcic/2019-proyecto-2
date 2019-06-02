import axios from "axios";

const endpoint = 'http://prode-iaw.herokuapp.com';

export async function login(email,password) {
    try {
        let res = await axios({
            url: endpoint+'/api/login',
            method: 'post',
            timeout: 8000,
            data: {
                email: email,
                password : password
            }
        })

        return res.data
    }
    catch (err) {
        console.log(`Error API , POST de login: ${e}`);
    }
}

export async function logout(token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.get( endpoint +`/api/logout` , axiosConfig);

        return response.data;

    } catch (e) {
        console.log(`Error API , GET de logout: ${e}`);
    }

}

export async function getPartidos(prode_id,token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.get(endpoint +`//api/prode/partidos/`+prode_id , axiosConfig);

        return response.data;

    } catch (e) {
        console.log(`Error API , POST de getPartidos: ${e}`);
    }

}

export async function getProdes(token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.get(endpoint +`//api/prode/user` , axiosConfig);

        return response.data;

    } catch (e) {
        console.log(`Error API , POST de getProdes: ${e}`);
    }

}

export async function createProde(nombre,token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.post( endpoint +'/api/prode/nuevo', {nombre : nombre} , axiosConfig );

        return response.data;

    } catch (e) {
        console.log(`Error API , POST de createProde: ${e}`);
    }
}

export async function saveProde(id,llaves,token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.post(endpoint +'/api/prode/save', {id : id , llaves : llaves} , axiosConfig );

        return response.data;

    } catch (e) {
        console.log(`Error API , POST de saveProde: ${e}`);
    }

}

export async function deleteProde(id,token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.post(endpoint +'/api/prode/delete', {id : id } , axiosConfig );

        return response.status;

    } catch (e) {
        console.log(`Error API , POST de deleteProde: ${e}`);
    }

}
