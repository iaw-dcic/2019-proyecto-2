import axios from "axios";

export async function login(email,password) {

    try {

        let axiosConfig = {
        };

        let response = await axios.post('/api/login' , {email: email,
            password : password } , axiosConfig );

        return response.data;

    } catch (e) {
        console.log(`Error API , POST de login: ${e}`);
        return 401;
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

        let response = await axios.get(`/api/logout` , axiosConfig);

        return response.data;

    } catch (e) {
        console.log(`Error API , GET de logout: ${e}`);
    }

}

export async function getPartidos(prode_id,token){

    let axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ token
        }
    };

    return axios.get(`/api/prode/partidos/`+prode_id , axiosConfig);

}

export function getProdes(token){

    let axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ token
        }
    };

    return axios.get(`/api/prode/user` , axiosConfig);
}

export async function createProde(nombre,token){

    let axiosConfig = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ token
        }
    };

    return axios.post('/api/prode/nuevo', {nombre : nombre} , axiosConfig );

}

export async function saveProde(id,llaves,token){

    try {

        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer '+ token
            }
        };

        let response = await axios.post('/api/prode/save', {id : id , llaves : llaves} , axiosConfig );

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

        return await axios.post('/api/prode/delete', {id : id } , axiosConfig );

    } catch (e) {
        console.log(`Error API , POST de deleteProde: ${e}`);
    }

}
