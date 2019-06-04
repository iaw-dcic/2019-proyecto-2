//form-login
//form-register

function register(data, url, callback){
    $.ajax({
        method: 'POST',
        url,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            name: 'service',
            data
        },
        success: (response) => callback(response.data)
    });
}

$(document).ready(() => {
    $('#form-login').on('submit', (event) => {
        event.preventDefault();
        let email = $(event.target.email).val();
        let password = $(event.target.password).val();
        register({email, password}, '/api/user/login', (data) => {
            let {id, name, email, auth_token} = data;
            let user = {id, name, email, auth_token};
            localStorage.setItem('user', JSON.stringify(user));
            window.location.replace("/");
        });
    });

    $('#form-register').on('submit', (event) => {
        event.preventDefault();
        let username = $(event.target.username).val();
        let name = $(event.target.name).val();
        let email = $(event.target.email).val();
        let password = $(event.target.password).val();
        let data = {email, password, name, username};
        register(data, '/api/user/register', (data) => {
            console.log(data);
            let {id, name, email, auth_token} = data;
            let user = {id, name, email, auth_token};
            localStorage.setItem('user', JSON.stringify(user));
            window.location.replace("/");
        });
    });
});