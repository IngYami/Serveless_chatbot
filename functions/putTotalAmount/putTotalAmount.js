let connectDB = require('../../conexionM/database');
let { output } = require('../../utils/utils');

exports.handler = async (event) => {

    let {
        httpMethod: method,
        queryStringParameters:p
    } = event;

   
    let client = await connectDB();
    const colCarts = client.db().collection('carts');

    if(method == 'PUT') {

        let {userId} = p;
        userId = Number(userId);

        let {total} = p;
        total = Number(total);

        try {
            let res = await colCarts.updateOne({user_id: userId}, {$set:{total: total}});
            return output(res);
        } catch (err) {
            output(err)
        }
    }
}
