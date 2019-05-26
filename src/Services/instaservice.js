export  default  class InstaService {
    constructor() {
        this._apiBase='http://localhost:3001/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return res.json();
    };

    getAllposts = async () => {
        const res = await  this.getResource('posts/');
        return res;
    }


}