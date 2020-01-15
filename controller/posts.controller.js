const axios = require('axios')
const fetch = require('node-fetch')

const handleErrors = (res) => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

class PostsController {
    static async get_posts(){

        /*
        fetch("https://jsonplaceholder.typicode.com/postssss")
            .then(function() {
                console.log("ok");
            }).catch(function() {
                console.log("error");
            });
        */

        /*
        fetch("https://jsonplaceholder.typicode.com/postss")
            .then(handleErrors)
            .then(response => console.log("ok") )
            .catch(error => console.log(error) );
        */
        
        
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts');
        } catch (err) {
            throw err
        }
        
    }

    static async get_posts_by_id(req){
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts/' + req);
        } catch (err) {
            throw err
        }
    }

    static async create_posts(req){
        try {
            return await axios({
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data: {
                  name: req.name,
                  title: req.title,
                  msg: req.msg
                }
              });
        } catch (err) {
            throw err
        }
    }
}

module.exports = PostsController