let connectDB = require('../../conexionM/database');
let { output, log } = require('../../utils/utils');

exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters:p,
        body: body
    } = event;

    let client = await connectDB();
    const colCarts = client.db().collection('carts');

    if(method == 'PUT') {

        let {userId} = p;
        userId = Number(userId);

        let bodyParams = JSON.parse(body);

        try {
            let res = await colCarts.updateOne(
                {user_id: userId}, 
                {$set: {
                        "detalles.nombre": bodyParams[0],
                        "detalles.apellido": bodyParams[1],
                        "detalles.email": bodyParams[2],
                        "detalles.paymentMethod": bodyParams[3],
                        "detalles.delivery": bodyParams[4]
                        
                    }
                }
            );

            return output(res);

        } catch (err) {
            log(err);
        }
    }

};