const axios = require('axios');

export {getChartDataFromAsset};
export {getDescriptionFromAsset};

async function getChartDataFromAsset(asset) {
    var data;
    var response = await axios('http://185.188.250.67:4567/assets/'+asset+'/price/days/3');
    data = response.data;
    return data;
}

async function getDescriptionFromAsset(asset) {
    var data;
    var response = await axios('http://185.188.250.67:4567/assets/'+asset+'/descr');
    data = response.data;
    return data;
}




    




