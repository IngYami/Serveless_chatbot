let connectDB = require('../../conexionM/database');
let { output, log } = require('../../utils/utils');

exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters:p
    } = event;

    let client = await connectDB();
    const colProducts = client.db().collection('productos');

    if(method == 'GET') {
    
        //Obtiene la información sobre el parámetro
        let {productId} = p;

        //Convierte el parámetro en un número que se pueda utilizar por la DB
        productId = Number(productId)

        //Si no hay parámetro, busca todos los productos
        if(!productId) {
            try {
                let res = await colProducts.find({}).toArray();
                return output(res);
                
            } catch (err) {
                log(err);
            }
        }
        
        else {
            try {
                let res = await colProducts.find({id: productId}).toArray();
                return output(res);

            } catch (err) {
                log(err);
            }
        }

    }

}