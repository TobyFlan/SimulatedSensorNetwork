module.exports = async function (context, sqlChanges) {
    context.log('JavaScript SQL trigger function processed a request.');

    context.log(`SQL CHANGES: ${JSON.stringify(sqlChanges)}`);
    
}