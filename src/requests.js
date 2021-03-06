import axios from 'axios';

const url = 'https://csvuploadr-be.herokuapp.com/api/posts';
// const url = 'http://localhost:5000/api/posts/';

class Requests{
    // Gets
    static getPosts(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                // console.log(data);
                resolve(
                    data.map(post => ({
                        ...post
                    }))
                );
            } catch(err){
                reject(err);
            }
        });
    }
    // Post
    static insertPost(title){
        const formData = new FormData();
        formData.append('file', title);
        
        
        return axios.post(url, formData);
    }

    // Delete
    static removePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default Requests;