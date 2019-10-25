function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function ip() {
    return fetch("https://api.ipify.org?format=json")
    .then(resultat => resultat.json())
    .then(json => json.ip);
}

// function ville() {
//     return fetch(
//         "https://api.ipstack.com/" +
//           ip +
//           "?access_key=af40be1d35baa28b63864eb0cbc6e03a"
//       )
//         .then(resultat => resultat.json())
//         .then(json => json.city);
// }

function ville() {
    return fetch(
        "https://ipapi.co/" + ip + "/json"
        
    )
    .then(resultat => resultat.json())
    .then(json => json.city);
}

export default {
    ip,
    capitalize,
    ville
}