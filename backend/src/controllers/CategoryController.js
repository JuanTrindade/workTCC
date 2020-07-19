const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
       const category = await connection('category').select('*');
       return response.json(category);
    },

    async create(request, response){
        const { title, description, telephone, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('category').insert({
            id,
            title,
            description,
            telephone,
            city,
            uf,
        })
        return response.json( { id } );
    }
};