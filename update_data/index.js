module.exports = async function (context, myTimer) {
    

    //update every 5 seconds
    //change all 20 sensors and buffer output
    const sensorDataArray = [];
    
    for(i = 1; i <= 20; i++){
  
        sensorDataArray.push({

            //update values for sensors 1 to 20
            Id: i,

            //random number between 8 and 15
            Temperature: Math.floor(Math.random() * ((15-8) + 1) + 8),

            //random number between 15 and 25
            Wind: Math.floor(Math.random() * ((25-15) + 1) + 15),

            //random number between 40 and 70
            RHumidity: Math.floor(Math.random() * ((70-40) + 1) + 40),

            //random number between 500 and 1500
            CO2: Math.floor(Math.random() * ((1500-500) + 1) + 500)

        });   

    }

    context.bindings.simulateData = JSON.stringify(sensorDataArray);
    
};