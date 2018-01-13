const initState = {
    isLoading: false,
    items: [],
    page: 0,
    q: 'singapore'
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
                items: action.items
            };

        default:
            return state;
    }
};
