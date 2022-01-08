const axios = require('axios');

export { getChartDataFromAsset };
export { getAssetInformation };

async function getChartDataFromAsset(asset, period) {
    var dataForChart, dataForIndicators, chartData, indicators;
    switch (period) {
        case "1":
            chartData = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/' + period + '');
            indicators = await axios('http://185.188.250.67:4567/assets/' + asset + '/indicators/sma/days/' + period + '');
            break;
        case "5":
            chartData = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/' + period + '');
            indicators = await axios('http://185.188.250.67:4567/assets/' + asset + '/indicators/sma/days/' + period + '');
            break;
        case "30":
            chartData = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/' + period + '');
            indicators = await axios('http://185.188.250.67:4567/assets/' + asset + '/indicators/sma/days/' + period + '');
            break;
        case "all":
            chartData = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/' + period + '');
            indicators = await axios('http://185.188.250.67:4567/assets/' + asset + '/indicators/sma/days/' + period + '');
            break;
        default:
            chartData = await axios('http://185.188.250.67:4567/assets/' + asset + '/price/days/3');
            indicators = await axios('http://185.188.250.67:4567/assets/' + asset + '/indicators/sma/days/3');
            break;
    }

    dataForChart = chartData.data;
    dataForIndicators = indicators.data;
    return [dataForChart, dataForIndicators];
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