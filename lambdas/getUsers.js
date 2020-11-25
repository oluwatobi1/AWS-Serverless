const Responses = require('./API_responses')

exports.handler = async event =>{
    console.log('event', event)

    if (!event.pathParameters || !event.pathParameters.ID){
        // return failed without and ID
        return Responses._400({message:'missing ID in request'})
    }

    let ID = event.pathParameters.ID;
    if (data[ID]){
        //return the data
        return Responses._200(data[ID])
    }

    //Failed as ID is not in data
    return Responses._400({message: 'ID not found in data'})
}

const data = {
    1244: {name: 'anom marce', age:25, job: 'specialist'},
    8265: {name: 'cmaaleew faleces', age:51, job: 'biologist'},
    4545: {name: 'slovane prescaw', age:15, job: 'engineer'},
}