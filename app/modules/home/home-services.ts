import axios from 'axios';

const API_KEY = 'f5da3ecc75d840fdb1f22f8418b8a14f';

export default {
    getNews(q: string, page: number) {
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`;

        const params = {
            page
        };

        if (q) {
            params['q'] = q;
        }

        return axios.get(url, {
            params
        });
    }
};
