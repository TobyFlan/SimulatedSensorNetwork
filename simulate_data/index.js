const crypto = require("crypto");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";


    if(name){

        context.bindings.simulateData = JSON.stringify([{

            //create random id
            Id: crypto.randomUUID(),

            //random number between 8 and 15
            Temperature: Math.floor(Math.random() * ((15-8) + 1) + 8),

            //random number between 15 and 25
            Wind: Math.floor(Math.random() * ((25-15) + 1) + 15),

            //random number between 40 and 70
            RHumidity: Math.floor(Math.random() * ((70-40) + 1) + 40),

            //random number between 500 and 1500
            CO2: Math.floor(Math.random() * ((1500-500) + 1) + 500)

        }]);

    }


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}