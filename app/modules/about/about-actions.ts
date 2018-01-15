import { dispatch } from 'app/root/root-store';

export default {
    async init() {
        dispatch({
            type: 'about/init'
        });
    },

    update(item) {
        dispatch({
            type: 'about/update',
            item
        });
    },

    changeColor() {
        dispatch({
            type: 'about/color'
        });
    }
};
