import { dispatch } from '../../root/root-store';

export default {
    async init() {
        dispatch({
            type: 'home/init'
        });
    }
};
