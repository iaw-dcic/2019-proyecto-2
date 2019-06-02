import axios from "axios";

export async function login(email,password) {
    try {
        let res = await axios({
            url: 'http://127.0.0.1:8000/api/login',
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

        let response = await axios.get(`http://127.0.0.1:8000/api/logout` , axiosConfig);

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

        let response = await axios.get(`http://127.0.0.1:8000/api/prode/partidos/`+prode_id , axiosConfig);

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

        let response = await axios.get(`http://127.0.0.1:8000/api/prode/user` , axiosConfig);

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

        let response = await axios.post('http://127.0.0.1:8000/api/prode/nuevo', {nombre : nombre} , axiosConfig );

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

        let response = await axios.post('http://127.0.0.1:8000/api/prode/save', {id : id , llaves : llaves} , axiosConfig );

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

        let response = await axios.post('http://127.0.0.1:8000/api/prode/delete', {id : id } , axiosConfig );

        return response.status;

    } catch (e) {
        console.log(`Error API , POST de deleteProde: ${e}`);
    }

}
