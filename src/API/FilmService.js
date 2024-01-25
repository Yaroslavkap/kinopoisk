import axios from 'axios';


export default class FilmService { 
    
    // static async getAll(limit = 10, page = 1) {
        
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { 
    //     params: {
    //         _limit: limit,
    //         _page: page
    //     }
    // })
    // return response;

    // }
    static async getAll(limit = 5, page = 1) {
        
        const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie', { 
            params: {
                limit: limit,
                page: page
            },
            headers: {
                "X-API-KEY": "B3KCZAK-TQ84M51-M8KZ21P-F3GK87Y"
            }
        })
        //console.log(response.data.docs)
        return response;
    
    }

    // static async getById(id) {
        
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     return response;
    
    // }

    static async getById(id) {
        
        const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie/' + id, {
            headers: {
                "X-API-KEY": "B3KCZAK-TQ84M51-M8KZ21P-F3GK87Y"
            }
        })
        return response;
    
    }

    static async getCommentsByPostId(id) {
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    
    }

    static async getAll_noLimit() {
        
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            // params: {
            //     _limit: limit,
            //     _page: page
            // }
        })
        return response;
    }
    
}