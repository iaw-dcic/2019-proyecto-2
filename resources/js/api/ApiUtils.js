import axios from "axios";

const endpoint = 'https://iaw-burger.herokuapp.com';
//const endpoint = 'http://127.0.0.1:8000';

export async function login(email,password) {

    try {

        let axiosConfig = {
            headers: {
            }
        };

        let response = await axios.post(endpoint + '/api/login' , {email: email,
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

        let response = await axios.get(endpoint+'/api/logout' , axiosConfig);

        return response.data;

    } catch (e) {
        console.log(`Error API , GET de logout: ${e}`);
    }

}



