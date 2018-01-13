const initState = {
    isLoading: false,
    isLoaded: false,
    items: [],
    page: 0,
    q: 'singapore',
    total: 0
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'home/init':
            return {
                ...state,
                isLoading: true
            };

        case 'home/init/success':
            return {
                ...state,
                isLoading: false,
                isLoaded: true
            };

        case 'home/load-more':
            return {
                ...state,
                page: state.page + 1
            }

        case 'home/load-more/success':
            return {
                ...state,
                items: state.items.concat(action.items),
                total: action.total
            };

        default:
            return state;
    }
};
