const axios = require('axios')

class UsersController {
    static async get_user(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response
        } catch (err) {
            throw err
        }
    }
}

module.exports = UsersController