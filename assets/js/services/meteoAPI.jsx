function ip() {
    return fetch("https://api.ipify.org?format=json")
    .then(resultat => resultat.json())
    .then(json => json.ip);
}

 function ville(ip) {
     return fetch(
       `https://ipapi.co/${ip}/json`
        
   )
     .then(resultat => resultat.json())
    .then(json => json.city);
 }


function meteo(ville) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ville}&APPID=41bf746dc88c49969754d9f12c5ea213&lang=fr&units=metric`
      )
        .then(resultat => resultat.json())
        .then(json => json);
}

export default {
    ip,
    ville,
    meteo
}