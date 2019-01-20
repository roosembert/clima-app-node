const axios = require('axios');

const getClima = async(lat, lng) => {
      let encodeLat = encodeURI(lat);
      let encodeLon = encodeURI(lng);

      let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8b5c310d41dd151ba386b3c36967d994`);
      //
      // if (resp.data.code != '20') {
      //    throw new Error('No se encontro el clima para esa ubicación');
      // }

      let clima = resp.data.main.temp;

      return clima;
}

module.exports = {
   getClima
}
