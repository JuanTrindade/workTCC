const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response){
        const { name, username, password, email, telephone, city, uf, imageUser, typeuser} = request.body;
        const id = crypto.randomBytes(8).toString('HEX');
        await connection('users').insert({
            id,
            name,
            username,
            password,
            email,
            telephone,
            city,
            uf,
            imageUser,
            typeuser,
        })
        return response.json( { id } );
    }
};