const fetch = require('node-fetch');

class Backend {
    constructor(){
        this.baseUrl = '';
    }

    setBaseUrl(url){
        this.baseUrl=url;
    }

    getBaseUrl(){
        return this.baseUrl;
    }
    
    get(slug){
        console.log(this.baseUrl.concat(slug))
        const result = fetch(this.baseUrl.concat(slug))
        .then(response=>response.json());
        return result;
    }

    post(slug, content){
        const result = fetch(this.baseUrl.concat(slug), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(content)
        })   
        .then(response=>response.json())
        return result;
    }

}

module.exports = Backend;
