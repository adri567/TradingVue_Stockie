const axios = require('axios');

axios.get('http://185.188.250.67:4567/assets/AAPL/price/days/3')
.then(response => {
    console.log(response.data);
})
.catch(error => console.error(error));

