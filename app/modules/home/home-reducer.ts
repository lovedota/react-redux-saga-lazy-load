const initState = {
    isLoading: false,
    isLoaded: false,
    items: [],
    page: 0,
    q: 'singapore',
    total: 0,
    selectedItem: null
};

export default (state = initState, action) => {
    const { type, data } = action;

    switch (type) {
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
            };

        case 'home/load-more/success':
            return {
                ...state,
                items: state.items.concat(data.items),
                total: data.total
            };

        case 'home/view-details':
            return {
                ...state,
                selectedItem: data.item
            };

        default:
            return state;
    }
};
