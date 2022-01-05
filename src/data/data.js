const axios = require('axios');

export { getChartDataFromAsset };
export { getAssetInformation };

async function getChartDataFromAsset(asset, period) {
    console.log(period);
    var data;
    var response;

    switch (period) {
        case 1:
            response = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/' + period + '');
            break;
        case 5:
            response = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/' + period + '');
            break;
        case 30:
            response = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/' + period + '');
            break;
        case "all":
            response = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/' + period + '');
            break;
        default:
            response = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/3');
            break;
    }

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