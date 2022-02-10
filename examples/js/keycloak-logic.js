var keycloak = new Keycloak();
function initKeycloak() {
    keycloak.init({onLoad: 'login-required'}).then(function() {
    }).catch(function() {
        console.log('failed to initialize');
    });
}

initKeycloak();

// var logout = function() {
//     keycloak.logout({"redirectUri":"http://localhost:3000/Scenes/lobby.html"});
// }