const username = prompt("Ingrese su nombre de usuario");
const password = prompt("Ingrese su contraseña");

const userDatabase = [
    {
        username: "andres",
        password: "123"
    },
    {
        username: "caro",
        password: "456"
    },
    {
        username: "mariana",
        password: "789"
    }
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta JavaScript"
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor! "
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta mas el cafe que el te"
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar"
    }
];



function usuarioExistente(username,password){
    for(let i = 0; i < userDatabase.length; i++){
        if(userDatabase[i].username === username && userDatabase[i].password === password){
            return true;
        }
    }
    return false;
}


function signIn (username,password){
    if(usuarioExistente(username,password)){
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline)
    }else{
        alert("Uuuuupsss, Usuario y contraseña Incorrectos")
    }
}

signIn(username, password);
