module.exports = async function (context, sqlChanges) {
    context.log('JavaScript SQL trigger function processed a request.');

    var totalTemp = 0, totalWind = 0, totalCO2 = 0, totalHumid = 0;

    for (let i = 0; i < sqlChanges.length; i++) {
        const change = sqlChanges[i];

        // Log information about the current change
        console.log(`Change ${i + 1}: ${JSON.stringify(change)}`);

        // Access individual components of the change
        const temperature = change.Item.Temperature; 
        const wind = change.Item.Wind; 
        const co2 = change.Item.CO2; 
        const humid = change.Item.RHumidity;

        totalTemp += temperature;
        totalWind += wind;
        totalCO2 += co2;
        totalHumid += humid;       

    }

    //print total values:
    console.log(`totalTemp = ${totalTemp}, totalWind = ${totalWind}, totalCO2 = ${totalCO2}, totalHumid = ${totalHumid}! `);

};