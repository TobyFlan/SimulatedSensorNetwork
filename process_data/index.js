
module.exports = async function (context, sqlChanges, sqlData, processData) {

    //array to buffer the output to database
    const sensorMetaDataArray = [];
    
    //loop through all 20 data entries
    for(i = 0; i < sqlData.length; i++){
  
        const change = sqlData[i];

        sensorMetaDataArray.push({

            //update values for sensors 1 to 20
            Id: change.SensorID,

            //update temperature values
            TempMax: change.MaxTemperature,
            TempMin: change.MinTemperature,
            TempAvg: change.AvgTemperature,

            //update wind speed values
            WindMax: change.MaxWind,
            WindMin: change.MinWind,
            WindAvg: change.AvgWind,

            //update humidity values
            HumidMax: change.MaxHumidity,
            HumidMin: change.MinHumidity,
            HumidAvg: change.AvgHumidity,

            //update co2 values
            CO2Max: change.MaxCO2,
            CO2Min: change.MinCO2,
            CO2Avg: change.AvgCO2

        });   

    }


    //push this data to database
    context.bindings.processData = JSON.stringify(sensorMetaDataArray);


};