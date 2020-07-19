const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { username } = request.body;
        
        const user = await connection('users_employee')
        .where('username', username)
        .select('password')
        .select('typeuser')
        .select('city')
        .select('uf')
        .select('telephone')
        .select('imageUser')
        .first();
        if(!user){
            return response.status(400).json({ error: 'Username not found!'});
        }
        return response.json(user);
    }
};