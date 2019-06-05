# Proyecto 2: React - REST - Laravel - MySQL

Repositorio de base para el Proyecto 2 - 2019 - React

## Creación del Fork

Debe realizar un fork de este repositorio en su propia cuenta de GitHub.
Una vez realizado esto, puede clonar su fork, y seguir las siguientes instrucciones para poder correr localmente el proyecto inicial en Laravel (ver requisitos mínimos [acá](https://laravel.com/docs/5.8#server-requirements)):

1. `git clone https://github.com/<UsuarioGitHub>/proyecto-2.git` clona localmente el fork del repositorio original, `<UsuarioGitHub>` **NO** debe ser `iaw-dcic`
1. `cd proyecto-2`
1. `composer install` instala dependencias
1. `cp .env.example .env` (`copy .env.example .env` en Windows) crea el archivo de configuración de entorno
1. `php artisan key:generate` agrega un api key aleatorio
1. `npm install` instala dependencias
1. `npm run dev` compila react
1. `php artisan serve` inicializa el server

Eso debería permitirle acceder a http://127.0.0.1:8000

## Creación del Pull Request para la entrega

1. Vaya a `https://github.com/<github-user>/proyecto-2`
1. Haga click en 'New pull request'
1. Haga click en 'compare across forks'
1. Seleccione como base respository a `iaw-dcic/proyecto-2`
1. Seleccione como head repository a su repositorio y branch donde tiene el proyecto.
1. Haga click en "Create pull request"
1. Escriba como título del Pull Request "Entrega Proyecto 1".
1. Agrege un comentario con el link al deploy en heroku,
1. Finalmente, haga click en "Create pull request".

## Deploy en Heroku

1. Crear una cuenta en https://www.heroku.com/
1. Crear la aplicación ![Ver](screenshots/screenshot1.png)
1. Elija un nombre único ![Ver](screenshots/screenshot2.png)
1. Vaya al tab deploy, conecte a su cuenta de Github ![Ver](screenshots/screenshot3.png)
1. Busque su repositorio y haga click en connect ![Ver](screenshots/screenshot4.png)
1. Habilite los deploy automáticos (opcional, también puede hacer deploys manuales) ![Ver](screenshots/screenshot5.png)
1. En el tab settings, haga click en 'Reveal Config Vars' ![Ver](screenshots/screenshot6.png)
1. Agregue la variable de entorno API_KEY ![Ver](screenshots/screenshot7.png)
1. Vaya a https://www.cleardb.com/login.view y registre una cuenta ![Ver](screenshots/screenshot9.png)
1. Ingrese sus datos, el número de teléfono no tiene que ser válido ![Ver](screenshots/screenshot10.png)
1. Verifique su email para poder continuar ![Ver](screenshots/screenshot11.png)
1. Cree su usuario y contraseña ![Ver](screenshots/screenshot12.png)
1. Registre los datos del perfil faltantes, no necesitan ser válidos ![Ver](screenshots/screenshot13.png)
1. Haga click en New Datastore ![Ver](screenshots/screenshot14.png)
1. Seleccione Google Cloud Platform ![Ver](screenshots/screenshot15.png)
1. Seleccione la opción Free (de prueba por 90 días) ![Ver](screenshots/screenshot16.png)
1. Haga click en Create Datastore ![Ver](screenshots/screenshot17.png)
1. Haga click en el nombre de la base de datos ![Ver](screenshots/screenshot18.png)
1. Seleccione el tab "System Information" ![Ver](screenshots/screenshot19.png)
1. Aquí encontrará el nombre de la base de datos, el hostname, el usuario y la contraseña. el puerto es el 3306. ![Ver](screenshots/screenshot20.png)

HEROKU
http://prodelibertadores.herokuapp.com/
