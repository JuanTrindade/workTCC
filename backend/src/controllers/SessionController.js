const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { username } = request.body;
        
        const user = await connection('users')
        .where('username', username)
        .select('password')
        .select('typeuser')
        .select('imageUser')
        .first();
        if(!user){
            return response.status(400).json({ error: 'Username not found!'});
        }
        return response.json(user);
    }
};