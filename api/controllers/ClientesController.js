/**
 * ClientesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async getClientes (req, res ){
        var clientes = await Clientes.find();
        var clientes_referred_code = [] ;
        for(var i = 0 ; i<clientes.length; i++ ){
            let count = await Clientes.count({referred:clientes[i].referredCode});
            if (count>0)
            clientes_referred_code.push(clientes[i]);
        }
        return res.status(200).json(clientes_referred_code);
    }
};