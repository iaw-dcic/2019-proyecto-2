import axios from "axios";

const endpoint = 'https://iaw-burger.herokuapp.com';

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



