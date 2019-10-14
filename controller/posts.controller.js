const axios = require('axios')

class PostsController {
    static async get_posts(){
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts');
        } catch (err) {
            throw err
        }
    }

    static async get_posts_by_id(req){
        try{
            return await axios.get('https://jsonplaceholder.typicode.com/posts/' + req);
        } catch (err) {
            throw err
        }
    }
}

module.exports = PostsController