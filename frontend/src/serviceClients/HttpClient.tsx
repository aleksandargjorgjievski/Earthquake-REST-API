const HttpClient = {

    async get(url) {
        return await fetch(url);
    }
};

export default HttpClient;