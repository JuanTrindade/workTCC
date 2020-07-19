const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const usersEmployee = await connection('users_employee').select('*');
        return response.json(usersEmployee);
    },


    async create(request, response){
        const { name, username, password, email, telephone, city, uf, description, imageUser, typeuser} = request.body;
        const id = crypto.randomBytes(8).toString('HEX');
        await connection('users_employee').insert({
            id,
            name,
            username,
            password,
            email,
            telephone,
            city,
            uf,
            description,
            imageUser,
            typeuser,
        })
        return response.json( { id } );
    }
};