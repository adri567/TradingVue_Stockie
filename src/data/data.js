const axios = require('axios');

export { getChartDataFromAsset };
export { getAssetInformation };

async function getChartDataFromAsset(asset) {
    var data;
    var response = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/all');
    data = response.data;
    return data;
}

async function getAssetInformation(asset) {
    var data;
    var response = await axios('http://185.188.250.67:4567/assets/' + asset + '/descr');
    data = response.data;
    var lastPrice = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/last');
    var assetData = {
        "name": data["name"],
        "description": data["description"],
        "country": data["country"],
        "sector": data["sector"],
        "industry": data["industry"],
        "currency": data["currency"],
        "website": data["website"],
        "price": lastPrice.data,
        "logo": data["logo"]["binaryData"]
    }
    return assetData;
}