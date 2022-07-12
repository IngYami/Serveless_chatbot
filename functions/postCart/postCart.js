let connectDB = require('../../conexionM/database');
let { output } = require('../../utils/utils');

exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters:parameters
    } = event;

    let client = await connectDB();
    const colCarts = client.db().collection('carts');

    if(method == 'POST') {

       
        let {userId} = parameters;
        userId = Number(userId);

        try {

            await colCarts.insertOne({
                user_id: userId,
                detalles: {
                    nombre: undefined,
                    apellido: undefined,
                    email: undefined,
                    paymentMethod: undefined,
                    delivery: undefined,
                    // total: undefined
                },
                products: []
            });
            
            return output(`Carrito creado para el usuario: ${ userId }`)

        } catch (error) {
            return output(error);
        }

    }

}