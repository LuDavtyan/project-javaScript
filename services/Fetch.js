class Fetch {
    static token = "";


    static get (url){
        return this.request(url, 'GET')
    }

    static post (url){
        return this.request(url, 'POST')
    }

    request(url, method, body = null){
        return fetch(url, {
            method,
            headers:{
                'content-type': 'application/json',
                'Authorization': 'Bearer' + this.token

            },
            body:JSON.stringify(userModel)
           
        })
    }
}

export default Fetch