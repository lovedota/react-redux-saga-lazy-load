import { dispatch } from '../../root/root-store';

export default {
    init() {
        dispatch({
            type: 'home/init'
        });
    },

    loadMore() {
        dispatch({
            type: 'home/load-more'
        });
    },

    viewArticle(item) {
        dispatch({
            type: 'home/view-details',
            data: {
                item
            }
        });
    }
};
